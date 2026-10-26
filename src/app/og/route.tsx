import { readFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

export const runtime = "nodejs";

const WIDTH = 1200;
const HEIGHT = 630;

const SAFE_PAD_X = 160;
const SAFE_PAD_Y = 100;

const DEFAULT_PAD_X = 260;
const DEFAULT_PAD_Y = 140;

const DEFAULT_IMAGE = "/images/logo.png";

async function loadSource(src: string): Promise<Buffer | null> {
  try {
    // Load local public assets safely.
    if (src.startsWith("/")) {
      const publicDir = path.resolve(process.cwd(), "public");
      const file = path.resolve(publicDir, `.${src}`);

      if (!file.startsWith(`${publicDir}${path.sep}`)) {
        return null;
      }

      return await readFile(file);
    }

    // Only self-hosted assets from /public are supported.
    return null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const requested = requestUrl.searchParams.get("src") ?? DEFAULT_IMAGE;

    // Do not use the logo as the page image when an actual page image exists.
    const pageImage =
      requested === DEFAULT_IMAGE ? null : await loadSource(requested);

    const source = pageImage ?? (await loadSource(DEFAULT_IMAGE));

    if (!source) {
      return new Response("Image unavailable", { status: 404 });
    }

    const isDefault = !pageImage;

    // Read original dimensions and normalize orientation.
    const normalized = await sharp(source, {
      limitInputPixels: 40_000_000,
    })
      .rotate()
      .flatten({
        background: isDefault ? "#ffffff" : "#f4f5f7",
      })
      .toColourspace("srgb")
      .png()
      .toBuffer();

    const metadata = await sharp(normalized).metadata();

    if (!metadata.width || !metadata.height) {
      return new Response("Invalid source image", { status: 422 });
    }

    // Create a 1200 x 630 blurred background using the same page image.
    const background = isDefault
      ? await sharp({
          create: {
            width: WIDTH,
            height: HEIGHT,
            channels: 3,
            background: "#ffffff",
          },
        })
          .jpeg()
          .toBuffer()
      : await sharp(normalized)
          .resize(WIDTH, HEIGHT, {
            fit: "cover",
            position: "centre",
          })
          .blur(30)
          .modulate({ brightness: 0.85 })
          .jpeg()
          .toBuffer();

    // Fit the complete original image inside the safe area.
    // "contain" preserves the original aspect ratio and avoids cropping.
    const padX = isDefault ? DEFAULT_PAD_X : SAFE_PAD_X;
    const padY = isDefault ? DEFAULT_PAD_Y : SAFE_PAD_Y;

    const maxWidth = WIDTH - padX * 2;
    const maxHeight = HEIGHT - padY * 2;

    const foreground = await sharp(normalized)
      .resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .png()
      .toBuffer();

    const foregroundMeta = await sharp(foreground).metadata();

    if (!foregroundMeta.width || !foregroundMeta.height) {
      return new Response("Unable to process image", { status: 500 });
    }

    // Center the entire source image over the background.
    const left = Math.round((WIDTH - foregroundMeta.width) / 2);
    const top = Math.round((HEIGHT - foregroundMeta.height) / 2);

    const jpeg = await sharp(background)
      .resize(WIDTH, HEIGHT, { fit: "fill" })
      .composite([
        {
          input: foreground,
          left,
          top,
        },
      ])
      .jpeg({
        quality: 88,
        mozjpeg: true,
      })
      .toBuffer();

    return new Response(new Uint8Array(jpeg), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Length": String(jpeg.length),
        "X-OG-Source": isDefault ? "fallback" : "page",
        "Cache-Control":
          "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("OG image generation failed:", error);

    return new Response("Unable to generate OG image", {
      status: 500,
    });
  }
}