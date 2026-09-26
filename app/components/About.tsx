import Image from "next/image";
import { site } from "../lib/site";

const stats = [
  { value: "GSTIN", label: site.gstin },
  { value: "4+", label: "Service Divisions" },
  { value: "100%", label: "Customer Focus" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-brand-blue-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-600">
            About Us
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            One team for fabrication and full-service technical support
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-700">
            {site.legalName} is a Bengaluru-based company built on precision
            engineering and dependable service. We manufacture roofing,
            cladding, and custom sheet metal products to exacting standards,
            while our IT, tech, and customer care teams keep operations
            running smoothly for the businesses we serve.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">
            Whether you need a fabricated component built right the first
            time, a technical issue resolved quickly, or a customer query
            handled with care, our team brings the same commitment to
            quality across every service we offer.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white bg-white/70 p-4 text-center shadow-sm"
              >
                <div className="truncate text-sm font-extrabold text-brand-blue-800 sm:text-base">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-gray-600 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-[2.5rem] bg-white shadow-xl shadow-brand-blue-900/10 sm:h-96 sm:w-96">
            <div
              aria-hidden
              className="absolute inset-4 rounded-[2rem] border-2 border-dashed border-brand-blue-100"
            />
            <Image
              src="/logo.png"
              alt="Desalt Encore Sheet Metal logo"
              width={220}
              height={150}
              className="relative h-auto w-44 sm:w-56"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-green-600 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
              Precision &middot; Reliability &middot; Care
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
