import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowRight,
  Heart,
  Flame,
  Wheat,
  ShieldCheck,
  Truck,
  Star,
  ChevronRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Newsletter from "../components/Newsletter";
import { useCart } from "../hook/CartHook";
import { useWishlist } from "../context/WishlistContext";
import SEO from "../components/SEO";

export default function Home() {
  const { addToCart, cart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch {
        toast.error("Failed to load products");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const features = [
    {
      icon: <Wheat size={28} />,
      title: "Fresh Ground",
      desc: "Every masala is stone-ground fresh. No sitting on shelves, no stale stock.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "No Preservatives",
      desc: "Pure spices, nothing else. No fillers, no anti-caking agents, no artificial colors.",
    },
    {
      icon: <Flame size={28} />,
      title: "Family Recipe",
      desc: "Three generations of spice wisdom. Original recipes passed down since 1937.",
    },
    {
      icon: <Truck size={28} />,
      title: "Pan-India Delivery",
      desc: "From Mumbai to your doorstep. Fresh masalas delivered anywhere in India.",
    },
  ];

  const heritageWords = [
    "EST. 1937",
    "STONE-GROUND",
    "FRESH DAILY",
    "NO PRESERVATIVES",
  ];

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chavan Brothers",
    url: "https://chavanbrothers.com",
    logo: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    description: "Mumbai's finest heritage spice and masala brand since 1937.",
    foundingDate: "1937",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "prince@creatordev.in",
      contactType: "customer service",
    },
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Home"
        description="Authentic Mumbai masalas and spice blends from Chavan Brothers. Stone-ground fresh since 1937 using traditional recipes passed down through three generations."
        keywords="Mumbai masalas, Chavan Brothers, authentic spices, stone-ground masalas, Indian spice blends, heritage spices, Lalbaug masalas"
        url="https://chavanbrothers.com"
        ld={organizationLd}
      />
      {/* =========================================
                    HERO SECTION
      ========================================= */}
      <section className="relative min-h-[90svh] md:min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-14 lg:px-24 overflow-hidden pt-20 md:pt-0 bg-cream dark:bg-charcoal">
        {/* Geometric accent shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-spice/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 right-20 w-16 h-16 bg-turmeric/10 rotate-12 hidden lg:block" />
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-spice/5 rotate-45 hidden lg:block" />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <div className="h-px w-12 bg-spice" />
            <p className="text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
              Mumbai's Finest Since 1937
            </p>
          </div>

          <h1 className="mb-6 sm:mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-heading tracking-wider uppercase text-charcoal dark:text-cream">
            MUMBAI'S
            <br />
            <span className="text-spice">SPICE</span>
            <br />
            LEGACY
          </h1>

          <p className="mb-8 sm:mb-10 max-w-md mx-auto md:mx-0 text-base sm:text-lg leading-relaxed text-smoke dark:text-cream/70 font-body">
            Authentic Mumbai masalas, stone-ground fresh from the heart of
            Lalbaug. Three generations of uncompromising spice craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link to="/products" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-lg bg-spice px-8 py-4 text-base font-body font-bold uppercase tracking-wider text-cream shadow-lg shadow-spice/30 transition hover:bg-spice-light"
              >
                Shop Masalas
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            <Link to="/about" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-lg border-2 border-charcoal/20 dark:border-cream/20 px-8 py-4 text-base font-body font-bold uppercase tracking-wider text-charcoal dark:text-cream transition hover:border-spice hover:text-spice"
              >
                Our Story
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT - SPICE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 hidden lg:block shrink-0 mt-12 md:mt-0"
        >
          <div className="relative">
            <div className="w-full max-w-[480px] aspect-[12/10] rounded-lg overflow-hidden shadow-2xl border-4 border-spice/20">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
                alt="Mumbai spice market - Chavan Brothers masalas"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-turmeric/20 rounded-lg -rotate-6" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-spice/20 rounded-lg rotate-12" />
            {/* Badge */}
            <div className="absolute -bottom-6 -right-2 bg-charcoal dark:bg-spice text-cream px-6 py-3 rounded-lg shadow-xl">
              <p className="font-heading text-2xl tracking-wider leading-none">SINCE 1937</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM HERITAGE BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-6 md:bottom-10 left-0 right-0 px-4 sm:px-6 md:px-14 lg:px-24"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-8 text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-smoke/50 dark:text-cream/30 font-body font-bold overflow-x-auto pb-1 no-scrollbar">
            {heritageWords.map((word, i) => (
              <span key={word} className="flex items-center gap-2 sm:gap-3 whitespace-nowrap">
                {word}
                {i < heritageWords.length - 1 && (
                  <span className="w-1.5 h-1.5 bg-spice/40 rotate-45" />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================
                    PRODUCTS SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-cream dark:bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 sm:gap-0 text-center sm:text-left"
          >
            <div>
              <p className="mb-2 sm:mb-3 text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
                Our Collection
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase">
                BOLD MASALAS
              </h2>
            </div>

            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-spice font-body font-bold uppercase tracking-wider transition-all hover:gap-4"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-spice border-t-transparent" />
            </div>
          ) : (
            <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  onClick={() => navigate(`/products/${product._id}`)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg bg-cream-light dark:bg-charcoal-light mb-4 border border-spice/10 dark:border-spice/20 transition-all duration-300 group-hover:border-spice/40 group-hover:shadow-lg">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id, product);
                        toast.success(
                          isInWishlist(product._id)
                            ? "Removed from Wishlist"
                            : "Added to Wishlist"
                        );
                      }}
                      className="absolute right-3 top-3 z-20 rounded-lg bg-cream/90 dark:bg-charcoal/80 p-2 shadow-md backdrop-blur-sm transition hover:bg-cream hover:scale-110"
                    >
                      <Heart
                        size={14}
                        className={`transition ${
                          isInWishlist(product._id)
                            ? "fill-spice text-spice"
                            : "text-charcoal dark:text-cream"
                        }`}
                      />
                    </button>

                    <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-all duration-500 group-hover:opacity-100 max-sm:hidden">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const existing = cart.find((i) => i._id === product._id);
                          addToCart(product);
                          toast.success(
                            existing
                              ? `${product.name} quantity increased`
                              : `${product.name} added to cart`
                          );
                        }}
                        className="flex items-center gap-2 rounded-lg bg-spice px-5 py-2.5 text-sm text-cream font-body font-bold uppercase tracking-wider shadow-xl transition hover:scale-105 hover:bg-spice-light"
                      >
                        <ShoppingCart size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>

                  <div className="px-1">
                    <p className="mb-1 text-[10px] sm:text-xs uppercase tracking-[2px] sm:tracking-[3px] text-spice font-body font-semibold">
                      {product.category || "Regional Blends"}
                    </p>
                    <h3 className="text-lg sm:text-xl font-heading tracking-wider uppercase mb-1 dark:text-cream leading-tight">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.round(product.rating) ? "fill-turmeric text-turmeric" : "text-smoke/30"}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-smoke/50 dark:text-cream/40 font-body">
                        ({product.numReviews})
                      </span>
                    </div>
                    <p className="text-lg font-body font-bold text-spice mt-1">
                      ₹{product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="mt-10 sm:mt-12 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-spice font-body font-bold uppercase tracking-wider transition-all hover:gap-4"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
                    STORY SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-spice" />
                <p className="text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
                  Our Heritage
                </p>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase mb-6">
                FROM LALBAUG
                <br />
                TO YOUR <span className="text-spice">KITCHEN</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-cream/70 font-body mb-4">
                In 1937, in the narrow lanes of Lalbaug, Mumbai, the Chavan family
                began grinding spices by hand on a traditional stone sil-batta. What
                started as a small shop serving the local community has grown into
                Mumbai's most trusted name in authentic masalas.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-cream/70 font-body mb-8">
                Three generations later, we still follow the same process. Every batch
                is slow-roasted, stone-ground, and packed fresh. No shortcuts. No
                compromises. Just pure, unadulterated spice.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 rounded-lg bg-spice px-8 py-4 text-sm font-body font-bold uppercase tracking-wider text-cream transition hover:bg-spice-light"
                >
                  Read Our Full Story
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden border-4 border-spice/20">
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
                  alt="Chavan Brothers spice grinding heritage"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-spice text-cream px-6 py-4 rounded-lg shadow-2xl">
                <p className="font-heading text-4xl tracking-wider leading-none">87+</p>
                <p className="font-body text-xs uppercase tracking-wider text-cream/80">Years of Spice</p>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-turmeric/30 rounded-lg rotate-12 hidden sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
                    FEATURES SECTION
      ========================================= */}
      <section className="px-4 sm:px-6 py-20 sm:py-32 md:px-14 lg:px-24 bg-cream-light dark:bg-charcoal-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <p className="mb-3 sm:mb-4 text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
              Why Choose Us
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase">
              WHY CHAVAN BROTHERS?
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group rounded-lg bg-white dark:bg-charcoal p-6 sm:p-8 shadow-sm border border-spice/10 dark:border-spice/20 transition-all duration-300 hover:shadow-lg hover:border-spice/30"
              >
                <div className="mb-5 sm:mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-spice/10 text-spice group-hover:bg-spice group-hover:text-cream transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-heading tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-smoke dark:text-cream/60 font-body text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
                    NEWSLETTER
      ========================================= */}
      <Newsletter />
    </div>
  );
}
