import Image from "next/image";
import { site } from "../lib/site";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-blue-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-1.5">
                <Image
                  src="/logo.png"
                  alt="Desalt Encore Sheet Metal logo"
                  width={36}
                  height={24}
                  className="h-7 w-auto"
                />
              </div>
              <span className="text-base font-bold text-white">
                {site.legalName}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-blue-100/70">
              Precision sheet metal fabrication combined with dependable IT,
              tech, and customer care support — one team you can rely on.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-blue-100/70 transition-colors hover:text-brand-green-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-blue-100/70">
              <li>{site.addressOneLine}</li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-brand-green-500"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.mobileHref}
                  className="transition-colors hover:text-brand-green-500"
                >
                  {site.mobile}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-brand-green-500"
                >
                  {site.email}
                </a>
              </li>
              <li>GSTIN: {site.gstin}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
