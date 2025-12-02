import React from "react";

/**
 * LocationPage — Minimal · Clean · Modern version
 * - Single centered column (maxWidth: 760)
 * - Subtle, modern color system: deep charcoal + mid gray + accent green
 * - Hero with three highlights, then unified cards (Education / Hypermarket / Parks / Hiking)
 * - Card internals use two-column responsive lists
 *
 * Images used (from your public/images folder):
 *  - location.png        (used as map / banner placeholder)
 *  - school.png
 *  - supermarket.png
 *  - brogahill.jpg
 *
 * Replace src/pages/LocationPage.jsx with this file.
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

// Design tokens (in-file for simplicity)
const COLORS = {
  ink: "#0f1724",    // headings / strong text
  copy: "#44505A",   // paragraph / secondary text
  accent: "#065f46", // small accents / distances
  cardBg: "#ffffff",
  subtle: "#f4f7f6", // row bg
  border: "rgba(15,23,36,0.06)"
};

// Small presentational components
function SectionCard({ title, intro, children }) {
  return (
    <section style={{ marginBottom: 26 }}>
      <h3 style={{ color: COLORS.ink, marginBottom: 8, fontSize: 20 }}>{title}</h3>
      {intro && <div style={{ color: COLORS.copy, marginBottom: 12 }}>{intro}</div>}
      <div style={{
        background: COLORS.cardBg,
        borderRadius: 12,
        padding: 18,
        border: `1px solid ${COLORS.border}`,
      }}>
        {children}
      </div>
    </section>
  );
}

function TwoColList({ items }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
    }}>
      {items.map(it => (
        <div key={it.name} style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 14px",
          borderRadius: 10,
          background: COLORS.subtle,
          border: `1px solid ${COLORS.border}`,
          lineHeight: 1.15,
        }}>
          <div style={{ color: COLORS.ink, fontWeight: 700, fontSize: 15 }}>{it.name}</div>
          <div style={{ color: COLORS.accent, fontWeight: 800 }}>{it.dist}</div>
        </div>
      ))}
    </div>
  );
}

export default function LocationPage() {
  return (
    <div style={{ background: "#fbfdfc" }}>
      {/* HERO */}
      <header style={{ padding: "2.25rem 1rem 0.75rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h1 style={{ color: COLORS.ink, fontSize: 30, marginBottom: 10, letterSpacing: -0.2 }}>
            Location — Comfortable everyday living
          </h1>
          <p style={{ color: COLORS.copy, fontSize: 15, margin: "0 auto 16px", maxWidth: 620 }}>
            Short drives to schools, shopping and parks — plus an easy weekend escape to Broga Hill. Comfortable, calm and connected.
          </p>

          <div style={{
            borderRadius: 12,
            overflow: "hidden",
            background: COLORS.cardBg,
            border: `1px solid ${COLORS.border}`,
            boxShadow: "none",
          }}>
            {/* using location.png as a neutral banner/map placeholder */}
            <video
              src="/videos/locationoverall.MOV"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* highlights: compact, subtle cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 14 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 10, borderRadius: 10, background: COLORS.cardBg, border: `1px solid ${COLORS.border}` }}>
              <div style={{ width: 72, height: 52, borderRadius: 8, overflow: "hidden", background: "#f6f6f6" }}>
                <img src="/images/school.png" alt="Schools" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: COLORS.ink }}>Schools</div>
                <div style={{ color: COLORS.copy, fontSize: 13 }}>Primary & secondary nearby</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 10, borderRadius: 10, background: COLORS.cardBg, border: `1px solid ${COLORS.border}` }}>
              <div style={{ width: 72, height: 52, borderRadius: 8, overflow: "hidden", background: "#f6f6f6" }}>
                <img src="/images/supermarket.png" alt="Hypermarkets" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: COLORS.ink }}>Hypermarkets</div>
                <div style={{ color: COLORS.copy, fontSize: 13 }}>Jaya Grocer, Lulu, Lotus</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 10, borderRadius: 10, background: COLORS.cardBg, border: `1px solid ${COLORS.border}` }}>
              <div style={{ width: 72, height: 52, borderRadius: 8, overflow: "hidden", background: "#f6f6f6" }}>
                <img src="/images/brogahill.jpg" alt="Parks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 700, color: COLORS.ink }}>Parks & Hiking</div>
                <div style={{ color: COLORS.copy, fontSize: 13 }}>Broga Hill & EcoHill parks</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN SINGLE COLUMN */}
      <main style={{ padding: "1.5rem 1rem 3.5rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* EDUCATION: one unified card with grouped two-column lists */}
          <SectionCard title="EDUCATION" intro="Schools and institutions within short drives — suitable for families.">
            <div style={{ display: "grid", gap: 18 }}>
              {education.map(group => (
                <div key={group.group}>
                  <div style={{ fontWeight: 800, color: COLORS.ink, marginBottom: 8, fontSize: 15 }}>{group.group}</div>
                  <TwoColList items={group.items} />
                </div>
              ))}
            </div>
          </SectionCard>

          {/* HYPERMARKET */}
          <SectionCard title="HYPERMARKET" intro="Quick access to grocery & household shopping for weekly needs.">
            <TwoColList items={hypermarkets} />
          </SectionCard>

          {/* PARKS */}
          <SectionCard title="PARKS" intro="Green spaces and family parks for daily walks and weekend play.">
            <TwoColList items={parks} />
          </SectionCard>

          {/* HIKING */}
          <SectionCard title="HIKING" intro="Short drive to a popular day-hike — great for weekend outings.">
            <div style={{ display: "grid", gap: 10 }}>
              {hiking.map(h => (
                <div key={h.name} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 14px",
                  borderRadius: 10,
                  background: COLORS.subtle,
                  border: `1px solid ${COLORS.border}`,
                }}>
                  <div style={{ color: COLORS.ink, fontWeight: 700 }}>{h.name}</div>
                  <div style={{ color: COLORS.accent, fontWeight: 800 }}>{h.dist}</div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* disclaimer */}
          <div style={{ marginTop: 18, textAlign: "center", color: "#94a0a6", fontSize: 13 }}>
            Distances are approximate and for guiding buyers. Please use maps or visit to confirm exact travel times.
          </div>
        </div>
      </main>

      {/* responsive tweaks */}
      <style>{`
        @media (max-width: 920px) {
          /* highlights stack */
          header div[style*="gridTemplateColumns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
        @media (max-width: 760px) {
          main > div { padding: 0 12px; }
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          img[alt="M Legasi map"] { height: 160px !important; }
        }
      `}</style>
    </div>
  );
}
