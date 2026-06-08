const features = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Every piece is crafted from responsibly sourced materials that stand the test of time — luxury without compromise.",
    accent: "#F5EDD8",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Fast Shipping",
    desc: "Free express delivery on orders over $75. Most orders arrive within 2-3 business days, right to your door.",
    accent: "#E8F0EB",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Easy Returns",
    desc: "Not happy? No problem. Enjoy hassle-free returns within 30 days — no questions asked, full refund guaranteed.",
    accent: "#EDE8F5",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Secure Checkout",
    desc: "Shop with complete confidence. Industry-standard SSL encryption and trusted payment gateways protect every transaction.",
    accent: "#F5E8EE",
  },
];

export default function WhyChooseDree() {
  return (
    <section className="py-15 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-11">
          <span className="section-label">Why ShopSphere</span>
          <h2 className="section-title">
            Crafted with Care, Delivered with Love
          </h2>
          <p className="mt-3 text-[#666] text-base max-w-lg mx-auto">
            We believe shopping should feel as good as the products you receive.
            Here's what makes us different.
          </p>
        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="group p-7 rounded-2xl border border-[#E8E8E4] bg-white cursor-pointer  hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-102 transition-all duration-500 text-center"
            >
              {/* Icon bubble */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: feat.accent }}
              >
                <span className="text-black">{feat.icon}</span>
              </div>

              <h3 className="text-base font-bold text-black mb-2">
                {feat.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-[#E8E8E4]">
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "4.9★", label: "Average Rating" },
            { value: "200+", label: "Premium Products" },
            { value: "30 Days", label: "Return Policy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black text-black mb-1"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#888] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
