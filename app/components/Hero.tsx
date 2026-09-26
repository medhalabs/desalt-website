import { site } from "../lib/site";

const pillars = [
  { label: "Sheetmetal Fabrication" },
  { label: "IT Support" },
  { label: "Tech Support" },
  { label: "Customer Care" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-brand-blue-50 via-white to-white"
    >
      {/* decorative grid + blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(36,72,147,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(36,72,147,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-blue-100 opacity-70 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-brand-green-100 opacity-70 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pb-20 pt-16 text-center sm:px-8 sm:pb-28 sm:pt-24">
        <span className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-blue-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green-500" />
          Bengaluru, Karnataka
        </span>

        <h1
          className="animate-fade-up text-balance max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          Precision Sheetmetal.
          <br />
          <span className="bg-gradient-to-r from-brand-blue-700 to-brand-green-600 bg-clip-text text-transparent">
            Dependable Tech &amp; Customer Support.
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-balance text-base leading-relaxed text-gray-600 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {site.legalName} delivers expert sheetmetal fabrication alongside
          IT, tech, and customer care support — one trusted team for your
          manufacturing and operational needs.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-brand-blue-800 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue-800/20 transition-all hover:-translate-y-0.5 hover:bg-brand-blue-700 hover:shadow-xl"
          >
            Get a Free Consultation
          </a>
          <a
            href={site.phoneHref}
            className="rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-green-500 hover:text-brand-green-700 hover:shadow-md"
          >
            Call {site.phone}
          </a>
        </div>

        <div
          className="animate-fade-up mt-14 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animationDelay: "320ms" }}
        >
          {pillars.map((p) => (
            <div
              key={p.label}
              className="rounded-2xl border border-gray-100 bg-white/80 px-3 py-4 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-sm sm:text-sm"
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
