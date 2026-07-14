import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Heart,
  ShoppingCart,
  Star,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  Award,
  BadgeCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import { toast } from "react-toastify";

export default function QuickViewModal({ product, isOpen, onClose }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    if (isOpen) setQty(1);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const increase = () => setQty((prev) => prev + 1);
  const decrease = () => { if (qty > 1) setQty((prev) => prev - 1); };

  const handleAddCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    toast.success(`${qty} item(s) added to cart`);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-cream-light shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 sm:right-5 sm:top-5 z-50 rounded-full bg-white p-2.5 sm:p-3 shadow-lg transition hover:rotate-90 text-spice"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%]">
            <div className="bg-cream p-6 sm:p-10 flex items-center justify-center max-lg:max-h-64 sm:max-lg:max-h-80">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={product.image}
                alt={product.name}
                className="max-h-48 sm:max-h-64 lg:max-h-[500px] rounded-2xl lg:rounded-3xl shadow-2xl object-contain"
              />
            </div>

            <div className="p-5 sm:p-8 lg:p-10 overflow-y-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-spice/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-spice font-body">
                <BadgeCheck size={14} className="hidden sm:block" />
                {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
              </span>

              <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl lg:text-5xl font-heading tracking-wider uppercase leading-tight text-charcoal">
                {product.name}
              </h2>

              <div className="mt-3 sm:mt-5 flex items-center gap-1.5 sm:gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={star <= Math.round(product.rating) ? "fill-turmeric text-turmeric" : "text-smoke/30"} />
                ))}
                <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-smoke font-body">
                  ({product.rating} rating)
                </span>
              </div>

              <div className="mt-5 sm:mt-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-spice font-body">
                  ₹{product.price}
                </h2>
                <span className="text-lg sm:text-xl lg:text-2xl text-smoke/50 line-through font-body">
                  ₹{Math.round(product.price * 1.25)}
                </span>
                <span className="rounded-full bg-red-100 px-2.5 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-bold text-red-600 font-body">
                  20% OFF
                </span>
              </div>

              <p className="mt-5 sm:mt-8 leading-7 sm:leading-8 text-sm sm:text-base text-smoke font-body">
                {product.description}
              </p>

              <div className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                <span className="rounded-full bg-spice/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-body font-medium text-spice">
                  Stone-Ground
                </span>
                <span className="rounded-full bg-spice/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-body font-medium text-spice">
                  No Preservatives
                </span>
                <span className="rounded-full bg-spice/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-body font-medium text-spice">
                  {product.category || "Mumbai Masala"}
                </span>
              </div>

              <div className="mt-6 sm:mt-10 flex items-center gap-3 sm:gap-5">
                <button onClick={decrease} className="rounded-xl border border-spice/30 p-3 sm:p-4 hover:bg-spice/10 text-charcoal">
                  <Minus size={16} />
                </button>
                <span className="text-xl sm:text-2xl font-bold text-charcoal font-body">{qty}</span>
                <button onClick={increase} className="rounded-xl border border-spice/30 p-3 sm:p-4 hover:bg-spice/10 text-charcoal">
                  <Plus size={16} />
                </button>
              </div>

              <div className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                <button onClick={handleAddCart} className="flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-spice px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-body font-semibold text-cream transition hover:bg-spice-light border-2 border-spice">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="flex-1 sm:flex-none rounded-xl sm:rounded-2xl border-2 border-spice px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-body font-semibold text-spice transition hover:bg-spice hover:text-cream">
                  Buy Now
                </button>
                <button onClick={() => toggleWishlist(product._id || product.id, product)} className="rounded-xl sm:rounded-2xl border-2 border-spice/30 p-3 sm:p-4 text-spice transition hover:bg-spice/10">
                  <Heart size={18} className={isInWishlist(product._id || product.id) ? "fill-red-500 text-red-500" : ""} />
                </button>
              </div>

              <div className="mt-6 sm:mt-10 rounded-2xl sm:rounded-3xl border border-spice/20 bg-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Truck className="text-spice shrink-0" size={18} />
                  <h3 className="text-base sm:text-lg font-heading tracking-wider uppercase text-charcoal">Free Delivery</h3>
                </div>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-smoke font-body">
                  Estimated delivery in <strong>2–4 business days</strong>.
                </p>
                <div className="mt-3 sm:mt-5 space-y-2 sm:space-y-3 font-body text-xs sm:text-sm text-smoke">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ShieldCheck size={16} className="text-spice shrink-0" />
                    <span>100% Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Award size={16} className="text-spice shrink-0" />
                    <span>Since 1937 — Heritage Brand</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Truck size={16} className="text-spice shrink-0" />
                    <span>Cash on Delivery Available</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ShieldCheck size={16} className="text-spice shrink-0" />
                    <span>Easy 7-Day Returns</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-10">
                <h3 className="text-lg sm:text-xl font-heading tracking-wider uppercase text-charcoal">
                  Product Highlights
                </h3>
                <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-smoke font-body">
                  <li>✔ Premium whole spices, stone-ground fresh</li>
                  <li>✔ No artificial colors or preservatives</li>
                  <li>✔ Lab tested for purity</li>
                  <li>✔ GMP certified manufacturing</li>
                  <li>✔ Heritage recipe since 1937</li>
                </ul>
              </div>

              <Link
                to={`/products/${product._id || product.id}`}
                onClick={onClose}
                className="mt-6 sm:mt-10 inline-flex items-center text-sm sm:text-base font-body font-semibold text-spice transition hover:translate-x-2 hover:underline"
              >
                View Full Details →
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
