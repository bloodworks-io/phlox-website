import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  const siteTitle = "Phlox - Free, Open Source Healthcare AI Assistant";
  const siteDescription =
    "An open-source, local-first AI assistant for healthcare professionals with transcription, task management, and decision support.";
  const siteUrl = "https://phlox.bloodworks.io";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Phlox",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "A free, open-source patient management and AI assistant for healthcare professionals.",
  };

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta
        name="keywords"
        content="healthcare, AI assistant, medical transcription, clinical notes, open source, local-first, privacy"
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
