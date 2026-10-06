"use client";

import { FormEvent, useState } from "react";
import { site } from "../lib/site";

const infoCards = [
  {
    label: "Visit Us",
    lines: site.addressLines,
    href: site.mapsHref,
    icon: (
      <path
        d="M10 2a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6Zm0 8.2A2.2 2.2 0 1 1 10 5.8a2.2 2.2 0 0 1 0 4.4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Call Us",
    lines: [site.phone, site.mobile, site.mobile2],
    href: site.phoneHref,
    icon: (
      <path
        d="M5.7 2.4 8 4.7a1 1 0 0 1 .2 1.2L7 8.3a9 9 0 0 0 4.7 4.7l2.4-1.2a1 1 0 0 1 1.2.2l2.3 2.3a1 1 0 0 1 0 1.5l-1.4 1.4a2 2 0 0 1-2 .5C9.2 16.4 3.6 10.8 2.4 5.8a2 2 0 0 1 .5-2L4.3 2.4a1 1 0 0 1 1.4 0Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Email Us",
    lines: [site.email],
    href: `mailto:${site.email}`,
    icon: (
      <path
        d="M2.5 5.5A1.5 1.5 0 0 1 4 4h12a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 16 16H4a1.5 1.5 0 0 1-1.5-1.5v-9Zm1.8.3 5.4 4.1a.5.5 0 0 0 .6 0l5.4-4.1H4.3Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "GSTIN",
    lines: [site.gstin],
    icon: (
      <path
        d="M10 1.5 3 4v5.2c0 4.4 3 8.5 7 9.3 4-.8 7-4.9 7-9.3V4l-7-2.5Zm-1 12.6-3.2-3.2 1.2-1.2 2 2 4.8-4.8 1.2 1.2-6 6Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Enquiry from ${name || "website visitor"} — ${service || "General"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-600">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let&apos;s discuss your project
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-gray-600">
            Reach out for a fabrication quote, an IT or tech support request,
            or any customer care query — we&apos;re here to help.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {infoCards.map((card) => {
                const content = (
                  <div className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-brand-blue-50/60 p-5 transition-colors hover:bg-brand-blue-50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-800 text-white">
                      <svg viewBox="0 0 20 20" className="h-5 w-5">
                        {card.icon}
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-brand-blue-700">
                        {card.label}
                      </div>
                      {card.lines.map((line) => (
                        <div
                          key={line}
                          className="mt-0.5 text-sm text-gray-700"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                );
                return card.href ? (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={card.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                title="Location map"
                src={site.mapsEmbedSrc}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Sheetmetal Fabrication</option>
                  <option>IT Support</option>
                  <option>Tech Support</option>
                  <option>Customer Care Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-brand-blue-800 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-blue-700 hover:shadow-lg sm:w-auto"
            >
              Send Message
            </button>
            {status === "sent" && (
              <p className="mt-3 text-sm font-medium text-brand-green-700">
                Your email app should now be open with your message ready to
                send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
