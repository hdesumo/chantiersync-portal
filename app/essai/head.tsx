export default function Head() {
  const title = "Essai Gratuit – ChantierSync";
  const description =
    "Profitez de 15 jours d’essai gratuit sur ChantierSync, la plateforme de gestion de chantiers. Simplifiez vos suivis, rapports et collaborations.";
  const url = "https://chantiersync.com/essai";
  const image = "https://chantiersync.com/og-image.png"; // 👉 à remplacer par ton image réelle

  return (
    <>
      {/* Title & description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon & thème */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#2563eb" />
    </>
  );
}
