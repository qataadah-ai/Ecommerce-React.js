import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../assets/Logo.png";
import { ShoppingCart } from "lucide-react";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 opacity-20 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <header
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-500 rounded-4xl w-[95%] max-w-[800px] border border-white/20 ${
          scrolled
            ? "bg-white/40 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.08)] top-2 "
            : "bg-white/40 backdrop-blur-md top-8"
        }`}
      >
        <div className="mx-auto px-4 md:px-6 lg:px-6">
          <div className="flex items-center justify-between h-14 md:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <img src={Logo} alt="Logo" className="w-25 h-25" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-[#444] hover:text-black transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--text)] group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <Link to="/cart">
            <div className="flex items-center gap-4 ml-35">
              <div className="relative p-1.5 transition-all rounded-2xl cursor-pointer hover:shadow-md">
                <ShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
</Link>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg cursor-pointer transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={` w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={` w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={` w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300  ${
              menuOpen ? "max-h-80 pb-5" : "max-h-0"
            }`}
          >
            
            <nav className="flex flex-col gap-1 pt-2 border-t border-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 px-3 text-sm font-medium text-[#444] hover:text-black hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#shop"
                className="btn-primary text-sm mt-3 justify-center"
              >
                Shop Now →
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
