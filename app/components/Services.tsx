type Service = {
  title: string;
  description: string;
  items: string[];
  accent: "blue" | "green";
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Sheetmetal Fabrication",
    description:
      "End-to-end sheetmetal manufacturing for roofing, cladding, and rainwater systems — engineered for precision and built to last.",
    items: [
      "Roofing & flashings",
      "Cladding systems",
      "Fascia & gutter",
      "Rainwater goods & downpipes",
      "Custom sheetmetal work",
    ],
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 10.5 12 4l9 6.5M5 9.5V20h5v-6h4v6h5V9.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "IT Support",
    description:
      "Reliable IT infrastructure support to keep your systems, networks, and devices running without interruption.",
    items: [
      "Network setup & maintenance",
      "Hardware & software troubleshooting",
      "System installation & upgrades",
      "Data backup & security basics",
      "On-site & remote assistance",
    ],
    accent: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <rect
          x="3"
          y="4"
          width="18"
          height="12"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 20h8M12 16v4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Tech Support",
    description:
      "Responsive technical support for day-to-day issues, device setup, and troubleshooting — so your team stays productive.",
    items: [
      "Device setup & configuration",
      "Software installation & updates",
      "Issue diagnosis & resolution",
      "Remote desktop assistance",
      "Preventive maintenance",
    ],
    accent: "blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M12 3v2.5M12 18.5V21M4.2 4.2l1.8 1.8M18 18l1.8 1.8M3 12h2.5M18.5 12H21M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Customer Care Support",
    description:
      "A dedicated support desk that listens, resolves, and follows up — building lasting trust with every customer interaction.",
    items: [
      "Dedicated help desk",
      "Query & complaint resolution",
      "After-sales support",
      "Order & service follow-ups",
      "Multi-channel assistance",
    ],
    accent: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.3A7.96 7.96 0 0 1 4 12Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-green-600">
            What We Do
          </span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fabrication expertise, technology support — under one roof
          </h2>
          <p className="mt-4 text-balance text-base leading-relaxed text-gray-600">
            From the factory floor to the help desk, we bring the same
            precision and reliability to everything we do.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div
                className={`absolute right-0 top-0 h-28 w-28 rounded-bl-[100%] opacity-60 transition-transform duration-300 group-hover:scale-125 ${
                  service.accent === "blue"
                    ? "bg-brand-blue-50"
                    : "bg-brand-green-100"
                }`}
                aria-hidden
              />
              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${
                  service.accent === "blue"
                    ? "bg-brand-blue-800 text-white"
                    : "bg-brand-green-600 text-white"
                }`}
              >
                {service.icon}
              </div>

              <h3 className="relative mt-5 text-xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              <ul className="relative mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        service.accent === "blue"
                          ? "text-brand-blue-600"
                          : "text-brand-green-600"
                      }`}
                    >
                      <path
                        d="M4 10.5 8 14l8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
