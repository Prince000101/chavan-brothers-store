import { Link } from "react-router-dom";
import { Flame, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 lg:px-24 py-14 sm:py-20">
        <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="mb-4 sm:mb-6 flex items-center gap-2">
              <div className="bg-spice p-1.5 rounded-lg">
                <Flame className="text-cream" size={18} strokeWidth={2.5} />
              </div>
              <span className="text-xl sm:text-2xl font-heading text-cream tracking-wider leading-none">
                CHAVAN BROTHERS
              </span>
            </div>
            <p className="text-sm font-body leading-relaxed text-cream/50 max-w-xs">
              Mumbai's finest heritage spice and masala brand. Stone-ground fresh
              from the heart of Lalbaug since 1937.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-4">
              <a href="mailto:prince@creatordev.in" className="text-cream/30 hover:text-spice-light transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+919876543210" className="text-cream/30 hover:text-spice-light transition-colors">
                <Phone size={18} />
              </a>
              <span className="text-cream/30 hover:text-spice-light transition-colors cursor-default">
                <MapPin size={18} />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-spice font-body font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Our Story", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm font-body text-cream/60 hover:text-cream transition-colors"
                  >
                    {item.name}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-spice font-body font-semibold">
              Categories
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {["Daily Masalas", "Regional Blends", "Pure Spices"].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm font-body text-cream/60 hover:text-cream transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-xs uppercase tracking-[3px] text-spice font-body font-semibold">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-body text-cream/60">
                Lalbaug, Mumbai 400013<br />
                Maharashtra, India
              </p>
              <p className="text-sm font-body text-cream/60">
                prince@creatordev.in
              </p>
              <p className="text-sm font-body text-cream/60">
                Mon - Sat: 9AM - 8PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs font-body text-cream/30">
            &copy; {new Date().getFullYear()} Chavan Brothers. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-body text-cream/30 uppercase tracking-widest">
            <span>Est. 1937</span>
            <span className="w-1 h-1 rounded-full bg-spice/60" />
            <span>Stone-Ground</span>
            <span className="w-1 h-1 rounded-full bg-spice/60" />
            <span>No Preservatives</span>
          </div>
          <p className="text-[10px] sm:text-xs font-body text-cream/20">
            Designed &amp; Developed by <span className="text-spice-light/60 font-semibold">Prince | Creator Dev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
