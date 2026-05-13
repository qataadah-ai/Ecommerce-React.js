const messages = [
  '✦ Free Shipping on all orders over $75',
  '✦ New Season Collection — Shop Now',
  '✦ Easy 30-Day Returns',
  '✦ Secure Checkout Guaranteed',
  '✦ Free Shipping on all orders over $75',
  '✦ New Season Collection — Shop Now',
  '✦ Easy 30-Day Returns',
  '✦ Secure Checkout Guaranteed',
]

export default function AnnouncementBar() {
  return (
    <div className="bg-black text-white overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-marquee">
        {messages.map((msg, i) => (
          <span
            key={i}
            className="mx-10 text-xs font-semibold tracking-widest uppercase shrink-0"
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
