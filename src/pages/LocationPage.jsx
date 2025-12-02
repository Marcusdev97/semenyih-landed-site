import React from "react";

/**
 * LocationPage — Minimal · Clean · Modern version (UPDATED with clean YouTube embed)
 *
 * This version keeps EVERYTHING from your latest layout.
 * Only the video inside the HERO is updated to:
 *  - autoplay
 *  - muted
 *  - loop
 *  - no controls / no YouTube branding
 *  - chrome removed
 *  - overlay blocks UI completely
 *
 * Video ID: ddlXqrtcEZk
 */

// Data (only confirmed items/distances)
const education = [
  { group: "Primary School", items: [
    { name: "SJK (C) Ton Fah Eco Majestic", dist: "3 km" },
    { name: "SK Bandar Rinching", dist: "4 km" },
    { name: "SJK (C) Kampung Baru Semenyih", dist: "6 km" },
    { name: "SJK (C) Sin Ming", dist: "6 km" },
    { name: "SJK (C) Ladang Semenyih", dist: "6 km" },
    { name: "SK Semenyih", dist: "6 km" },
  ]},
  { group: "Secondary School", items: [
    { name: "SMK Bandar Rinching", dist: "3 km" },
    { name: "SMK Engku Husain", dist: "7 km" },
  ]},
  { group: "International School", items: [
    { name: "Tenby International School @ Setia Ecohill", dist: "5 km" },
    { name: "Maverick International School Semenyih", dist: "10 km" },
  ]},
  { group: "Universities", items: [
    { name: "University of Nottingham, Malaysia", dist: "4 km" },
    { name: "MARA Japan Industrial Institution", dist: "8 km" },
  ]},
];

const hypermarkets = [
  { name: "Jaya Grocer", dist: "3 km" },
  { name: "Lulu Supermarket & Department Store", dist: "3 km" },
  { name: "Lotus Semenyih", dist: "5 km" },
  { name: "Pasaraya Besar CLC", dist: "6 km" },
  { name: "Econsave", dist: "6 km" },
];

const parks = [
  { name: "Adventure Park", dist: "4 km" },
  { name: "Wau Park", dist: "4 km" },
  { name: "Setia EcoHill Parks", dist: "5 km" },
  { name: "South Creek", dist: "5 km" },
];

const hiking = [
  { name: "Broga Hill", dist: "3 km" },
];

// Design tokens
const COLORS = {
  ink: "#0f1724",
  copy: "#44505A",
  accent: "#065f46",
  cardBg: "#ffffff",
  subtle: "#f4f7f6",
  border: "rgba(15,23,36,0.06)"
};

// ---------- UI COMPONENTS ----------
function SectionCard({ title, intro, children }) {
  return (
    <section style={{ marginBottom: 26 }}>
      <h3 style={{ color: COLORS.ink, marginBottom: 8, fontSize: 20 }}>{title}</h3>
      {intro && <div style={{ color: COLORS.copy, marginBottom: 12 }}>{intro}</div>}
      <div
        style={{
          background: COLORS.cardBg,
          borderRadius: 12,
          padding: 18,
          border: `1px solid ${COLORS.border}`,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function TwoColList({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
      }}
    >
      {items.map((it) => (
        <div
          key={it.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 14px",
            borderRadius: 10,
            background: COLORS.subtle,
            border: `1px solid ${COLORS.border}`,
            lineHeight: 1.15,
          }}
        >
          <div style={{ color: COLORS.ink, fontWeight: 700, fontSize: 15 }}>{it.name}</div>
          <div style={{ color: COLORS.accent, fontWeight: 800 }}>{it.dist}</div>
        </div>
      ))}
    </div>
  );
}

// ---------- PAGE ----------
export default function LocationPage() {
  const VIDEO_ID = "ddlXqrtcEZk";
  const cleanEmbed = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`;

  return (
    <div style={{ background: "#fbfdfc" }}>
      {/* HERO */}
      <header style={{ padding: "2.25rem 1rem 0.75rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ color: COLORS.ink, fontSize: 30, marginBottom: 10, letterSpacing: -0.2 }}>
            Location — Comfortable everyday living
          </h1>
          <p
            style={{
              color: COLORS.copy,
              fontSize: 15,
              margin: "0 auto 16px",
              maxWidth: 620,
            }}
          >
            Short drives to schools, shopping and parks — plus an easy weekend escape to Broga Hill.
            Comfortable, calm and connected.
          </p>

          {/* CLEAN YOUTUBE HERO */}
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              background: COLORS.cardBg,
              border: `1px solid ${COLORS.border}`,
            }}
          >
            <div style={{ position: "relative", width: "100%", height: 240 }}>
              <iframe
                title="Location Overview — M Legasi"
                src={cleanEmbed}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                  pointerEvents: "none",
                }}
              />
              {/* Overlay to block interactions, avoid UI */}
              <div
                aria-hidden="true"
                onClick={(e) => e.preventDefault()}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "transparent",
                  pointerEvents: "auto",
                }}
              />
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginTop: 14,
            }}
          >
            {/* Schools */}
            <HighlightCard
              img="/images/school.png"
              title="Schools"
              desc="Primary & secondary nearby"
            />

            {/* Hypermarkets */}
            <HighlightCard
              img="/images/supermarket.png"
              title="Hypermarkets"
              desc="Jaya Grocer, Lulu, Lotus"
            />

            {/* Parks */}
            <HighlightCard
              img="/images/brogahill.jpg"
              title="Parks & Hiking"
              desc="Broga Hill & EcoHill parks"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main style={{ padding: "1.5rem 1rem 3.5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionCard title="EDUCATION" intro="Schools and institutions within short drives — suitable for families.">
            <div style={{ display: "grid", gap: 18 }}>
              {education.map((group) => (
                <div key={group.group}>
                  <div
                    style={{
                      fontWeight: 800,
                      color: COLORS.ink,
                      marginBottom: 8,
                      fontSize: 15,
                    }}
                  >
                    {group.group}
                  </div>
                  <TwoColList items={group.items} />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="HYPERMARKET"
            intro="Quick access to grocery & household shopping for weekly needs."
          >
            <TwoColList items={hypermarkets} />
          </SectionCard>

          <SectionCard
            title="PARKS"
            intro="Green spaces and family parks for daily walks and weekend play."
          >
            <TwoColList items={parks} />
          </SectionCard>

          <SectionCard
            title="HIKING"
            intro="Short drive to a popular day-hike — great for weekend outings."
          >
            <TwoColList items={hiking} />
          </SectionCard>

          <div
            style={{
              marginTop: 18,
              textAlign: "center",
              color: "#94a0a6",
              fontSize: 13,
            }}
          >
            Distances are approximate and for guiding buyers. Please verify via maps or site visits.
          </div>
        </div>
      </main>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 920px) {
          header div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 760px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          main > div {
            padding: 0 12px;
          }
        }
      `}</style>
    </div>
  );
}

function HighlightCard({ img, title, desc }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        background: COLORS.cardBg,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        style={{
          width: 72,
          height: 52,
          borderRadius: 8,
          overflow: "hidden",
          background: "#f6f6f6",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div style={{ textAlign: "left" }}>
        <div style={{ fontWeight: 700, color: COLORS.ink }}>{title}</div>
        <div style={{ color: COLORS.copy, fontSize: 13 }}>{desc}</div>
      </div>
    </div>
  );
}
