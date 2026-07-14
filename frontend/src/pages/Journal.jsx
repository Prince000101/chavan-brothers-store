import journalData from "../data/journalData";
import JournalCard from "../components/JournalCard";
import FeaturedArticle from "../components/FeaturedArticle";
import SEO from "../components/SEO";

function Journal() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-14 lg:px-24 py-12 sm:py-16 transition-colors duration-500">
      <SEO
        title="Journal"
        description="Discover spice knowledge, masala recipes, and the heritage behind Mumbai's most authentic flavors from Chavan Brothers."
        keywords="spice journal, masala recipes, Indian spice knowledge, Chavan Brothers blog, cooking with masalas, Mumbai food culture, spice guides"
        url="https://chavanbrothers.com/journal"
      />
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading tracking-wider uppercase text-charcoal dark:text-cream">
          SPICE <span className="text-spice">JOURNAL</span>
        </h1>
        <p className="text-smoke dark:text-cream/60 font-body mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Discover spice knowledge, masala recipes, and the heritage behind Mumbai's most authentic flavors.
        </p>
      </div>
      <FeaturedArticle />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {journalData.map((article) => (
          <JournalCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Journal;
