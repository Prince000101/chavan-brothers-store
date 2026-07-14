import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Flame, ShieldCheck, Clock3 } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:prince@creatordev.in?subject=${encodeURIComponent(subject || "Contact from Chavan Brothers")}&body=${body}`;
  };

  const features = [
    { icon: <Clock3 size={28} />, title: "Fast Support", desc: "Quick assistance from our team. We respond within 24 hours." },
    { icon: <ShieldCheck size={28} />, title: "Secure Orders", desc: "Your information stays safe. Safe and encrypted checkout." },
    { icon: <Flame size={28} />, title: "Trusted Brand", desc: "Heritage spice brand with 87+ years of trust and quality." },
  ];

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chavan Brothers",
    url: "https://chavanbrothers.com",
    telephone: "+91-98765-43210",
    email: "prince@creatordev.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lalbaug",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400013",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 py-14 sm:py-20 md:px-14 lg:px-24 transition-colors duration-500">
      <SEO
        title="Contact Us"
        description="Get in touch with Chavan Brothers. Questions about our masalas, orders, or wholesale inquiries? We are always ready to help from our Mumbai headquarters."
        keywords="contact Chavan Brothers, Chavan Brothers support, Mumbai masala inquiry, wholesale spices, Chavan Brothers phone number, Chavan Brothers address"
        url="https://chavanbrothers.com/contact"
        ld={localBusinessLd}
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-14 sm:mb-20 max-w-3xl text-center"
      >
        <p className="mb-3 sm:mb-4 uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs text-spice font-body font-semibold">Chavan Brothers Support</p>
        <h1 className="mb-4 sm:mb-6 font-heading tracking-wider uppercase text-4xl sm:text-5xl md:text-6xl text-charcoal dark:text-cream">LET'S CONNECT</h1>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-smoke dark:text-cream/60 font-body">
          Questions about our masalas, orders, or wholesale inquiries? Our team is always ready to help.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg bg-white dark:bg-charcoal-light p-6 sm:p-8 md:p-10 shadow-sm border border-spice/10 dark:border-spice/20"
        >
          <h2 className="mb-8 sm:mb-10 font-heading tracking-wider uppercase text-3xl sm:text-4xl text-charcoal dark:text-cream">CONTACT INFORMATION</h2>
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {[
              { icon: <Mail className="text-spice" size={20} />, title: "Email Address", desc: "prince@creatordev.in" },
              { icon: <Phone className="text-spice" size={20} />, title: "Phone Number", desc: "+91 98765 43210" },
              { icon: <MapPin className="text-spice" size={20} />, title: "Location", desc: "Lalbaug, Mumbai 400013, Maharashtra, India" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 sm:gap-5">
                <div className="rounded-lg bg-spice/10 p-3 sm:p-4">{item.icon}</div>
                <div>
                  <h3 className="mb-1 text-lg font-heading tracking-wider uppercase text-charcoal dark:text-cream">{item.title}</h3>
                  <p className="text-sm sm:text-base text-smoke dark:text-cream/60 font-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 md:mt-12 rounded-lg bg-charcoal/5 dark:bg-spice/10 p-5 sm:p-6 md:p-8">
            <h3 className="mb-3 sm:mb-4 font-heading tracking-wider uppercase text-2xl sm:text-3xl text-charcoal dark:text-cream">BUSINESS HOURS</h3>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-smoke dark:text-cream/60 font-body">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-lg bg-white dark:bg-charcoal-light p-6 sm:p-8 md:p-10 shadow-sm border border-spice/10 dark:border-spice/20"
        >
          <h2 className="mb-8 sm:mb-10 font-heading tracking-wider uppercase text-3xl sm:text-4xl text-charcoal dark:text-cream">SEND US A MESSAGE</h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
            <input name="name" value={form.name} onChange={handleChange} required type="text" placeholder="Your Name" className="w-full rounded-lg border border-spice/20 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-charcoal dark:text-cream font-body transition focus:border-spice" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Your Email" className="w-full rounded-lg border border-spice/20 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-charcoal dark:text-cream font-body transition focus:border-spice" />
            <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Subject" className="w-full rounded-lg border border-spice/20 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-charcoal dark:text-cream font-body transition focus:border-spice" />
            <textarea name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Write your message..." className="w-full rounded-lg border border-spice/20 bg-transparent px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none text-charcoal dark:text-cream font-body transition focus:border-spice" />
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="flex w-full items-center justify-center gap-3 rounded-lg bg-spice py-3.5 sm:py-4 text-base sm:text-lg font-body font-bold uppercase tracking-wider text-cream transition hover:bg-spice-light">
              <Send size={18} /> SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 sm:mt-20 md:mt-24 grid max-w-7xl gap-5 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="rounded-lg bg-white dark:bg-charcoal-light p-5 sm:p-6 md:p-8 shadow-sm border border-spice/10 dark:border-spice/20"
          >
            <div className="mb-4 sm:mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-spice/10 text-spice">
              {feature.icon}
            </div>
            <h3 className="mb-3 sm:mb-4 font-heading text-xl tracking-wider uppercase text-charcoal dark:text-cream">{feature.title}</h3>
            <p className="leading-relaxed text-sm sm:text-base text-smoke dark:text-cream/60 font-body">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
