import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Flame, Wheat, ShieldCheck, Truck, Star } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const timeline = [
    {
      year: "1937",
      title: "The Beginning",
      desc: "Rajaram Chavan opens a small spice shop in Lalbaug, Mumbai. Using a stone sil-batta, he begins grinding masalas for the local community.",
    },
    {
      year: "1962",
      title: "Second Generation",
      desc: "Rajaram's sons expand the business, adding Goda Masala and Kala Masala to the lineup. Word spreads across Mumbai about the unmatched quality.",
    },
    {
      year: "1985",
      title: "The Legacy Grows",
      desc: "The brand becomes a household name in Maharashtra. Chavan Brothers masalas are now found in kitchens across Mumbai, Pune, and Nashik.",
    },
    {
      year: "2005",
      title: "Modern Era",
      desc: "Third generation takes over. While honoring tradition, they bring modern packaging and pan-India delivery to the brand.",
    },
    {
      year: "2026",
      title: "Today",
      desc: "Chavan Brothers serves customers across India and internationally. Still stone-ground. Still family recipes. Still no compromises.",
    },
  ];

  const values = [
    {
      icon: <Wheat size={28} />,
      title: "Stone-Ground Tradition",
      desc: "We use the same traditional sil-batta grinding method our grandfather pioneered in 1937. No industrial grinders, no shortcuts.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Zero Preservatives",
      desc: "Our masalas contain nothing but pure, whole spices. No anti-caking agents, no fillers, no artificial colors or flavors.",
    },
    {
      icon: <Flame size={28} />,
      title: "Slow-Roasted Perfection",
      desc: "Each spice is individually dry-roasted to unlock its full flavor profile before blending. A process that takes time but delivers depth.",
    },
    {
      icon: <Truck size={28} />,
      title: "Packed Fresh, Shipped Fast",
      desc: "Every order is packed on the same day it is ground. You get the freshest masala possible, delivered to your doorstep.",
    },
  ];

  const aboutLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chavan Brothers",
    url: "https://chavanbrothers.com",
    description: "Mumbai's finest heritage spice and masala brand since 1937. Authentic stone-ground masalas from Lalbaug.",
    foundingDate: "1937",
    foundingLocation: {
      "@type": "Place",
      name: "Lalbaug, Mumbai",
    },
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <SEO
        title="Our Story"
        description="Discover the heritage of Chavan Brothers - Mumbai's finest masala brand since 1937. Three generations of stone-ground spice craftsmanship from Lalbaug."
        keywords="Chavan Brothers history, Mumbai masala brand, heritage spices, Lalbaug spice shop, family spice business, stone-ground tradition since 1937"
        url="https://chavanbrothers.com/about"
        ld={aboutLd}
      />
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-20 gap-10 sm:gap-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="h-px w-12 bg-spice" />
            <p className="text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
              Our Story
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-wider uppercase text-charcoal dark:text-cream mb-6 leading-[0.95]">
            MUMBAI'S SPICE
            <br />
            <span className="text-spice">HERITAGE</span>
          </h1>
          <p className="text-sm sm:text-base text-smoke dark:text-cream/70 font-body mb-4 leading-relaxed">
            At Chavan Brothers, we are custodians of a tradition that began in 1937.
            Every pinch of masala carries three generations of knowledge, love, and
            an unwavering commitment to quality.
          </p>
          <p className="text-sm sm:text-base text-smoke dark:text-cream/70 font-body mb-8 leading-relaxed">
            From the bustling spice markets of Lalbaug to kitchens across India,
            our journey has been defined by one simple principle: never compromise
            on the spice.
          </p>
          <Link
            to="/products"
            className="inline-block rounded-lg bg-spice px-8 py-4 text-sm font-body font-bold uppercase tracking-wider text-cream shadow-lg shadow-spice/20 hover:bg-spice-light transition-all"
          >
            Shop Our Masalas
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="shrink-0 w-full md:w-auto"
        >
          <div className="w-full max-w-[500px] mx-auto h-[350px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-xl border-4 border-spice/20 bg-gradient-to-br from-spice/10 to-turmeric/10">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80"
              alt="Chavan Brothers spice heritage"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <div className="border-t-2 border-spice/10 mx-4 sm:mx-6 md:mx-14 lg:mx-24 mb-16" />

      {/* TIMELINE */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-charcoal text-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
              Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase">
              HERITAGE <span className="text-spice">TIMELINE</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-spice/20 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-spice rounded-lg -translate-x-1/2 mt-1 z-10 border-2 border-charcoal" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-3xl sm:text-4xl font-heading tracking-wider text-spice">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-heading tracking-wider uppercase mt-2 mb-2 text-cream">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/60 font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MUMBAI CONNECTION */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-cream dark:bg-charcoal">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl border-4 border-spice/20"
          >
            <img
              src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80"
              alt="Mumbai streets - Chavan Brothers origin"
              className="w-full h-[350px] sm:h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-spice" />
              <p className="text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
                Mumbai Roots
              </p>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading tracking-wider uppercase mb-6 text-charcoal dark:text-cream">
              BORN IN <span className="text-spice">MUMBAI</span>
            </h2>
            <p className="text-base leading-relaxed text-smoke dark:text-cream/70 font-body mb-4">
              Mumbai is not just where we are from -- it is who we are. The city's
              relentless energy, its diverse food culture, and its spirit of
              determination are baked into every blend we create.
            </p>
            <p className="text-base leading-relaxed text-smoke dark:text-cream/70 font-body mb-4">
              From the vada pav stalls of Parel to the seafood restaurants of
              Colaba, our masalas have been part of Mumbai's culinary fabric for
              nearly nine decades.
            </p>
            <p className="text-base leading-relaxed text-smoke dark:text-cream/70 font-body">
              The Lalbaug shop still stands. The stone sil-batta still grinds.
              And the Chavan family still stands behind every packet that leaves
              our hands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-16 sm:py-24 bg-cream-light dark:bg-charcoal-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="mb-3 text-xs uppercase tracking-[4px] text-spice font-body font-semibold">
              Our Values
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase">
              WHAT WE <span className="text-spice">STAND FOR</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-lg bg-white dark:bg-charcoal p-6 sm:p-8 shadow-sm border border-spice/10 dark:border-spice/20 hover:shadow-lg hover:border-spice/30 transition-all duration-300"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-spice/10 text-spice">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl tracking-wider uppercase mb-2 text-charcoal dark:text-cream">
                  {item.title}
                </h3>
                <p className="text-smoke dark:text-cream/60 font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPER CREDIT */}
      <section className="px-4 sm:px-6 md:px-14 lg:px-24 py-12 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="text-turmeric" size={16} />
            <p className="text-xs uppercase tracking-[3px] text-cream/40 font-body font-semibold">
              Crafted With Passion
            </p>
            <Star className="text-turmeric" size={16} />
          </div>
          <p className="text-sm font-body text-cream/30">
            Built by <span className="text-spice-light/80 font-semibold">Prince</span> | <span className="text-turmeric/80 font-semibold">Creator Dev</span>
          </p>
        </div>
      </section>
    </div>
  );
}
