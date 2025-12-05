import React from "react";
import { Helmet } from "react-helmet-async";
import VideoHero from "../components/VideoHero";
import UnitsGrid from "../components/UnitsGrid";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>M Legasi — Affordable Freehold Landed Homes in Semenyih | From RM5xxk</title>
        <meta name="description" content="M Legasi — the most affordable freehold landed homes in Semenyih. 1555 sqft, gated & guarded, 0% downpayment. To know more via WhatsApp." />
        <link rel="canonical" href="https://semenyihlanded.com/" />
        <meta property="og:title" content="M Legasi — Affordable Freehold Landed Homes in Semenyih" />
        <meta property="og:description" content="1555 sqft, gated & guarded, 0% downpayment. Own a landed home close to LEKAS & amenities." />
        <meta property="og:image" content="https://semenyihlanded.com/og-image.jpg" />
        <meta property="og:url" content="https://semenyihlanded.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, borderRadius: 9999, border: '1px solid #e5e7eb', padding: '6px 10px', fontSize: 12, color: '#6b7280', marginBottom: 12 }}>
          ✨ Limited Release · Freehold Landed Homes
        </div>

        <h1 style={{ fontSize: 32, lineHeight: 1.05, color: '#065f46', marginBottom: 12, fontWeight: 700 }}>
          Limited Affordable Freehold Landed Price
        </h1>

        <p style={{ color: '#6b7280', maxWidth: 800, margin: '0 auto 18px', fontSize: 16 }}>
          Spacious double-storey homes built for modern families. 4 rooms • 3 baths • generous parking space • Minutes from Bukit Broga & Eco Majestic.
        </p>
      </section>

      <VideoHero />
      <UnitsGrid />
    </>
  );
}
