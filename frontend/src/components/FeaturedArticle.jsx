import { useMemo } from "react";
import { randomSpiceImage } from "../utils/images";

function FeaturedArticle() {
  const featImage = useMemo(() => randomSpiceImage(), []);

  return (
    <div className="relative rounded-[16px] sm:rounded-[28px] overflow-hidden mb-10 sm:mb-14">
      <img src={featImage} alt="Featured" loading="lazy" decoding="async" className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/30 sm:via-forest/60 sm:to-transparent flex flex-col justify-center p-5 sm:p-8 md:p-16">
        <span className="text-sand font-body font-semibold mb-2 sm:mb-3 uppercase tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-sm">Featured Article</span>
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-cream max-w-xl md:max-w-2xl leading-tight">Ancient Spice Wisdom for Modern Kitchens</h2>
        <p className="text-cream/70 font-body mt-2 sm:mt-5 max-w-lg text-xs sm:text-base">Explore the timeless art of spice blending and Mumbai's rich culinary heritage.</p>
        <button className="mt-3 sm:mt-6 w-fit rounded-full bg-cream text-forest hover:bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-body font-semibold transition">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default FeaturedArticle;
