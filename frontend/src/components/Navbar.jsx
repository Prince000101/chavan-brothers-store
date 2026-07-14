import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Flame, ShoppingCart, Heart, LogOut, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../hook/CartHook";
import useWishlistHook from "../hook/WishlistHook";
import useAuth from "../hook/AuthContextHook";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart = [] } = useCart() || {};
  const { wishlist: WishlistItems = [] } = useWishlistHook();
  const { user, logout } = useAuth() || {};
  const cartCount = cart.length;
  const WishlistCount = WishlistItems.length;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-cream/95 dark:bg-charcoal/95 backdrop-blur-md border-b-2 border-spice/20 dark:border-spice/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-spice p-2 rounded-lg">
            <Flame className="text-cream" size={22} strokeWidth={2.5} />
          </div>
          <span className="text-2xl md:text-3xl font-heading text-charcoal dark:text-cream tracking-wider leading-none">
            CHAVAN BROTHERS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-body font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-spice"
                    : "text-smoke dark:text-cream/70 hover:text-spice dark:hover:text-spice-light"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {user ? (
            <>
              {user.isAdmin && (
                <NavLink
                  to="/admin"
                  className="flex items-center gap-1.5 text-sm font-body font-semibold text-turmeric hover:text-turmeric-light transition-colors"
                >
                  <Shield size={14} /> Admin
                </NavLink>
              )}
              <button
                onClick={logout}
                className="text-sm font-body font-semibold text-smoke dark:text-cream/60 hover:text-spice dark:hover:text-spice-light transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-sm font-body font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-spice" : "text-smoke dark:text-cream/70 hover:text-spice dark:hover:text-spice-light"
                }`
              }
            >
              Login
            </NavLink>
          )}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link to="/Wishlist" className="relative p-2">
            <Heart
              className="text-charcoal dark:text-cream hover:text-spice transition-colors"
              size={20}
              strokeWidth={2}
            />
            {WishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-spice text-cream text-[9px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {WishlistCount}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative p-2">
            <ShoppingCart
              className="text-charcoal dark:text-cream hover:text-spice transition-colors"
              size={20}
              strokeWidth={2}
            />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-spice text-cream text-[9px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <div className="hidden md:block">
            <DarkModeToggle />
          </div>

          <button
            className="lg:hidden text-charcoal dark:text-cream p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-charcoal dark:bg-charcoal-light border-t-2 border-spice/30"
          >
            <div className="px-6 py-8 space-y-6">
              <div className="flex flex-col gap-5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-heading tracking-wider ${
                        isActive ? "text-spice-light" : "text-cream/80 hover:text-cream"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}

                {user ? (
                  <>
                    {user.isAdmin && (
                      <NavLink
                        to="/admin"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2 text-xl font-heading tracking-wider text-turmeric"
                      >
                        <Shield size={20} /> ADMIN PANEL
                      </NavLink>
                    )}
                    <button
                      onClick={() => {
                        logout();
                        setMenuOpen(false);
                      }}
                      className="flex items-center gap-2 text-xl font-heading tracking-wider text-spice-light text-left"
                    >
                      <LogOut size={20} /> LOGOUT
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-xl font-heading tracking-wider ${isActive ? "text-spice-light" : "text-cream/80"}`
                    }
                  >
                    LOGIN / REGISTER
                  </NavLink>
                )}
              </div>

              <div className="flex items-center gap-6 border-t border-cream/10 pt-6">
                <Link to="/Wishlist" onClick={() => setMenuOpen(false)} className="relative">
                  <Heart className="text-cream" size={22} strokeWidth={2} />
                  {WishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-spice text-cream text-[9px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {WishlistCount}
                    </span>
                  )}
                </Link>
                <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
                  <ShoppingCart className="text-cream" size={22} strokeWidth={2} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-spice text-cream text-[9px] font-body font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <DarkModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
