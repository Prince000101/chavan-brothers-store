import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "Chavan Brothers",
  description = "Authentic Mumbai masalas and spice blends, stone-ground fresh since 1937.",
  keywords = "Mumbai masalas, spice blends, Chavan Brothers, authentic spices, stone-ground masalas, Indian spices",
  url = "https://chavanbrothers.com",
  image = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80",
  type = "website",
  ld = null,
}) {
  const siteName = "Chavan Brothers";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      {ld && (
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      )}
    </Helmet>
  );
}
