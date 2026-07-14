import { useState } from "react";
import { toast } from "react-toastify";
import { Flame, Send } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    const existing = JSON.parse(localStorage.getItem("chavanBrothersNewsletter") || "[]");
    if (existing.includes(email)) {
      toast.info("Already subscribed!");
      return;
    }
    existing.push(email);
    localStorage.setItem("chavanBrothersNewsletter", JSON.stringify(existing));
    toast.success("Subscribed! Welcome to the Chavan Brothers family.");
    setEmail("");
  };

  return (
    <section className="mx-4 sm:mx-6 my-16 sm:my-20 bg-spice rounded-lg overflow-hidden shadow-2xl">
      <div className="relative px-6 py-16 sm:py-20 text-center">
        {/* Geometric accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-chili-dark/50 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-chili-dark/40 translate-x-1/2 translate-y-1/2 rotate-12" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="text-turmeric" size={24} strokeWidth={2.5} />
            <span className="text-xs uppercase tracking-[5px] text-cream/70 font-body font-semibold">
              Stay Updated
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-cream tracking-wider uppercase mb-4">
            Get Spice Alerts
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-cream/80 font-body max-w-2xl mx-auto">
            Fresh masala drops, recipes, and exclusive offers delivered to your inbox. No spam, only spice.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:w-96 rounded-lg border-2 border-cream/20 bg-cream/10 px-5 py-4 text-cream placeholder:text-cream/40 font-body outline-none focus:border-turmeric transition-colors"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-charcoal px-8 py-4 font-body font-bold text-cream uppercase tracking-wider transition hover:bg-charcoal-light hover:scale-105"
            >
              <Send size={16} />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
