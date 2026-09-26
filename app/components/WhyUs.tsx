const features = [
  {
    title: "Precision Engineering",
    description:
      "Every fabricated component is measured, cut, and finished to exact specifications.",
    icon: (
      <path
        d="M14.7 6.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.3 6.3-6.3a1 1 0 0 1 1.4 0Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Fast Turnaround",
    description:
      "Streamlined processes and responsive support teams that respect your timelines.",
    icon: (
      <path
        d="M10 2a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm.75 8.19 3.4 2-.75 1.3-4.15-2.44V5.5h1.5Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "GST Registered & Compliant",
    description: "Fully compliant business operations you can transact with confidently.",
    icon: (
      <path
        d="M10 1.5 3 4v5.2c0 4.4 3 8.5 7 9.3 4-.8 7-4.9 7-9.3V4l-7-2.5Zm-1 12.6-3.2-3.2 1.2-1.2 2 2 4.8-4.8 1.2 1.2-6 6Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Multidisciplinary Team",
    description:
      "Skilled fabricators alongside IT and customer support specialists, all in-house.",
    icon: (
      <path
        d="M7 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM1.5 17c0-3 2.7-5 5.5-5s5.5 2 5.5 5v.5h-11V17Zm10.9-4.4c2.2.5 3.6 2.2 3.6 4.4v.5h3v-.5c0-2.6-2.2-4.4-4.7-4.6a5.3 5.3 0 0 0-1.9.2Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Reliable Ongoing Support",
    description:
      "We stay engaged after delivery — for maintenance, troubleshooting, or follow-up.",
    icon: (
      <path
        d="M10 2a6 6 0 0 0-6 6v3.5L2.5 14a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L16 11.5V8a6 6 0 0 0-6-6Zm0 16a2.2 2.2 0 0 0 2.1-1.5H7.9A2.2 2.2 0 0 0 10 18Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Customer-First Approach",
    description:
      "Clear communication and genuine care guide every project and every conversation.",
    icon: (
      <path
        d="M10 17.5s-6.5-3.9-6.5-8.6A3.9 3.9 0 0 1 10 6.4a3.9 3.9 0 0 1 6.5 2.5c0 4.7-6.5 8.6-6.5 8.6Z"
        fill="currentColor"
      />
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-blue-900 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-500">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built on precision, trusted for support
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.08]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green-600 text-white">
                <svg viewBox="0 0 20 20" className="h-5 w-5">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mt-4 text-base font-bold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
