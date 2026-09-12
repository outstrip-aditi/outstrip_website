import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import { getServiceBySlug } from "@/lib/services";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const footerServiceSlugs = [
  "react-js",
  "wordpress",
  "android-app-development",
  "seo",
  "magento",
  "custom-website-design",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-ink to-[#0a0a0a] text-white">

      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <div className="h-1 w-full bg-gradient-to-r from-accent via-blue-500 to-accent opacity-60" />

      <div className="container-wide relative px-4 py-16 md:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-2">
            <Link href="/" className="group relative z-50 flex items-center">
              <img
                src="/images/footer-logo.png"
                alt="Outstrip"
                className="h-9 w-52 object-contain md:h-12 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>

            {/* Social Media Icons */}
            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://facebook.com/outstripinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>

                <a
                  href="https://twitter.com/outstripinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>

                <a
                  href="https://linkedin.com/company/outstripinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>

                <a
                  href="https://instagram.com/outstripinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  <FaInstagram className="h-4 w-4" />
                </a>

                <a
                  href="https://youtube.com/outstripinfotech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent/20 hover:text-accent"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {/* Navigation */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Navigate
              </p>

              <ul className="mt-4 space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block text-sm text-white/60 transition-all duration-300 hover:pl-1 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/testimonials"
                    className="inline-block text-sm text-white/60 transition-all duration-300 hover:pl-1 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Our Services
              </p>

              <ul className="mt-4 space-y-2.5">
                {footerServiceSlugs.map((slug) => {
                  const service = getServiceBySlug(slug);
                  if (!service) return null;

                  return (
                    <li key={slug}>
                      <Link
                        href={`/services/${slug}`}
                        className="inline-block text-sm text-white/60 transition-all duration-300 hover:pl-1 hover:text-white"
                      >
                        {service.shortTitle}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/services"
                    className="inline-block text-sm font-semibold text-accent-bright transition-all duration-300 hover:pl-1"
                  >
                    View all services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Get In Touch
              </p>

              <ul className="mt-4 space-y-3.5 text-sm">

                <li className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <FaEnvelope className="h-4 w-4 shrink-0 text-accent" />

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all hover:text-white"
                  >
                    {siteConfig.email}
                  </a>
                </li>

                <li className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <FaPhone className="h-4 w-4 shrink-0 text-accent" />

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </li>

                <li className="flex items-center gap-3 text-white/60 transition-colors hover:text-white">
                  <FaPhone className="h-4 w-4 shrink-0 text-accent" />

                  <a
                    href={`tel:${siteConfig.phoneAlt.replace(/\s/g, "")}`}
                    className="hover:text-white"
                  >
                    {siteConfig.phoneAlt}
                  </a>
                </li>

                <li className="flex items-start gap-3 text-white/60 transition-colors hover:text-white">
                  <FaMapMarkerAlt className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{siteConfig.address}</span>
                </li>

              </ul>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:scale-105 hover:bg-accent/80"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}