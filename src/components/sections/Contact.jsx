import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-15 lg:py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title max-w-3xl">
              Need style advice, order support, or product help? We&apos;re here
              for you.
            </h2>
            <p className="mt-4 text-base text-[#4b5563] max-w-2xl leading-relaxed">
              Reach out to our team with any questions and we&apos;ll respond
              quickly. Whether you need sizing guidance, order updates, or
              return support, ShopSphere makes it easy.
            </p>
          </div>

          <form className="rounded-4xl border border-[#e5e7eb] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-[#334155]">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-[#e5e7eb] bg-[#F8F8F8] px-4 py-3 text-sm text-[#111827] outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-[#334155]">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-[#e5e7eb] bg-[#F8F8F8] px-4 py-3 text-sm text-[#111827] outline-none focus:border-black focus:ring-2 focus:ring-black/10"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-[#334155] mt-4 block">
              Message
              <textarea
                rows="5"
                resize="none"
                placeholder="Tell us how we can help..."
                className="w-full rounded-3xl border border-[#e5e7eb] bg-[#F8F8F8] px-4 py-3 text-sm text-[#111827] outline-none focus:border-black focus:ring-2 focus:ring-black/10"
              />
            </label>

            <button type="submit" className="btn-primary mt-6 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
