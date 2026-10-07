"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "../lib/site";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Desalt Encore Sheetmetal logo"
            width={44}
            height={30}
            priority
            className="h-9 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-brand-blue-800 sm:text-base">
              Desalt Encore
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-green-600 sm:text-xs">
              Sheetmetal Pvt. Ltd.
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-blue-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="rounded-full bg-brand-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-700 hover:shadow-md"
          >
            Call {site.phone}
          </a>
          <a
            href={site.mobileHref}
            className="rounded-full bg-brand-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-blue-700 hover:shadow-md"
          >
            Call {site.mobile}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-blue-800 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-blue-50 hover:text-brand-blue-800"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-full bg-brand-blue-800 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Call {site.phone}
            </a>
            <a
              href={site.mobileHref}
              className="mt-2 rounded-full bg-brand-blue-800 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Call {site.mobile}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
