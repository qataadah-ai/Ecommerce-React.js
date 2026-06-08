import React from "react";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="rounded-4xl bg-white border border-[#e5e7eb] p-10 md:p-14 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-4">
              <span className="section-label">About Us</span>
              <h2 className="section-title max-w-xl">
                We curate premium wardrobe essentials with style and care.
              </h2>
              <p className="text-base text-[#475569] max-w-xl leading-relaxed">
                ShopSphere brings modern design, elevated quality, and seamless
                service together so every purchase looks great and feels
                effortless.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#f1f5f9] bg-[#f8fafc] p-5">
                <h3 className="font-semibold text-black mb-2">
                  Curated Selection
                </h3>
                <p className="text-sm text-[#64748b]">
                  Hand-picked styles designed for everyday confidence.
                </p>
              </div>
              <div className="rounded-3xl border border-[#f1f5f9] bg-[#f8fafc] p-5">
                <h3 className="font-semibold text-black mb-2">
                  Thoughtful Service
                </h3>
                <p className="text-sm text-[#64748b]">
                  Friendly support for orders, returns, and styling guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
