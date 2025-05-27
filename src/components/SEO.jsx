import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const siteTitle = "Phlox - Experimental Open Source AI Project";
  const siteDescription =
    "An open-source experimental project for educational exploration of local AI concepts like transcription and text organization. Intended for educational and personal experimentation ONLY. NOT a certified medical device. Not for clinical use.";
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
      "An open-source experimental project for educational exploration of local text processing. Intended for educational and personal experimentation ONLY. NOT a certified medical device or for clinical use.", // Updated
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta
        name="keywords"
        content="experimental AI, educational AI, AI text processing, local AI demo, open source AI project" // Updated
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
