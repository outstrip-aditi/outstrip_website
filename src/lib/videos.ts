/**
 * Centralized video configuration — the video equivalent of `lib/images.ts`.
 *
 * `src` is intentionally empty until real footage is available: leave it as
 * "" and the <BackgroundVideo> component renders the poster image only (no
 * broken request, no placeholder stock clip). Drop in a real, ideally
 * muted/looping, .mp4 URL or `/videos/...` public-folder path and the
 * matching spot autoplays it automatically — nothing else needs to change.
 */

import { images } from "./images";

export type VideoAsset = {
  /** Empty string = no video yet; the component falls back to `poster`. */
  src: string;
  poster: string;
  alt: string;
};

export const videos = {
  // Homepage "About" preview — a short office/team/product-in-motion loop.
  aboutIntro: {
    src: "/officeVedio.mp4",
    poster: "/images/about-us-banner.png",
    alt: "Inside the OUTSTRIP office",
  },
  // /about/careers — "life at OUTSTRIP" culture loop.
  careersCulture: {
    src: "/officeVedio.mp4",
    poster: images.careers.src,
    alt: "Inside the OUTSTRIP office",
  },
} as const satisfies Record<string, VideoAsset>;
