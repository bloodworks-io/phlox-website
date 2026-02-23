import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const siteTitle = "Phlox - Free AI Medical Scribe";
  const siteDescription =
    "A free, open source AI medical scribe that runs entirely on your computer.";
  const siteUrl = "https://phlox.bloodworks.io"; // This can remain as is or be updated if the URL changes

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Phlox",
    applicationCategory: "SoftwareApplication", // Updated
    operatingSystem: "Any", // Can remain as is
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A free, open source AI medical scribe that runs entirely on your computer.", // Updated
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta
        name="keywords"
        content="AI medical scribe, medical transcription, clinical notes, AI scribe, free medical scribe, local AI, open source medical software, patient notes, medical documentation" // Updated
      />
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
