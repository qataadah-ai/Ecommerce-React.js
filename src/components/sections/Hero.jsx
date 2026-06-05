import HomeImage from "../../assets/home-image.avif"
const trustBadges = [
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    text: "Secure Payment",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    text: "Fast Delivery",
  },
  {
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    text: "30-Day Returns",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 w-full py-12">
        <div className="grid md:grid-cols-2 items-center grid-cols-1 gap-8">
          {/* Left — Text */}
          <div className="order-2 md:order-1 fade-up">
            <h1
              className="text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.05] tracking-tight text-black mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Elegance
              <br />
              <span className="text-main">Redefined.</span>
              <br />
              Live Beautifully.
            </h1>

            <p className="text-base text-[#555] leading-relaxed max-w-sm mb-8">
              Discover curated pieces crafted for those who appreciate beauty in
              the details. Premium quality, timeless style — delivered to your
              door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#shop" className="btn-primary">
                Shop Now
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a href="#categories" className="btn-outline">
                Explore Collection
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-5">
              {trustBadges.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-2 text-sm text-[#555] font-medium"
                >
                  <span className="flex items-center justify-center w-7 h-7 bg-black text-white rounded-full shrink-0">
                    {b.icon}
                  </span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="order-1 md:order-2 relative flex justify-center justify-items-start">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Image card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] aspect-[4/5]">
                <img
                  src={HomeImage}
                  alt="Daintree Premium Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 top-1/3 bg-white rounded-2xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] ">
                <div className="flex items-center gap-3">
                  <div className="text-xl">⭐</div>
                  <div>
                    <div className="text-sm font-bold text-black">
                      4.9 / 5.0
                    </div>
                    <div className="text-xs text-[#888]">12k+ Reviews</div>
                  </div>
                </div>
              </div>

              {/* Floating promo pill */}
              <div className="absolute -right-4 bottom-12 bg-black text-white rounded-2xl px-3 py-2 shadow-xl ">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#C9A96E]">
                  Limited
                </div>
                <div className="text-sm font-semibold">30% OFF Today</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
