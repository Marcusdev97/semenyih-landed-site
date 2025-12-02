// src/pages/UnitsPage.jsx
import React from "react";
import UnitsGrid from "../components/UnitsGrid";

/**
 * UnitsPage — hero playground video (clean YouTube embed) + units grid
 * - Playground ID: -Bv4dfKC7nE
 * - Autoplay, muted, loop via embed params
 * - youtube-nocookie domain + params to remove chrome (controls, branding, etc.)
 * - Transparent overlay blocks interactions so no YouTube UI appears
 */

const COLORS = {
  ink: "#0f1724",
  copy: "#4b5563",
  accent: "#065f46",
  cardBg: "#ffffff",
  border: "rgba(15,23,36,0.08)",
};

const PLAYGROUND_ID = "-Bv4dfKC7nE";
const PLAYGROUND_SRC = `https://www.youtube-nocookie.com/embed/${PLAYGROUND_ID}?autoplay=1&mute=1&loop=1&playlist=${PLAYGROUND_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`;

export default function UnitsPage() {
  return (
    <div style={{ background: "#fbfdfc", minHeight: "100vh", paddingTop: 0 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.25rem 1rem 0.75rem" }}>
        {/* HEADER */}
        <header style={{ textAlign: "center", marginBottom: 12 }}>
          <h1 style={{ margin: 0, color: COLORS.ink, fontSize: 28 }}>Layout & Parks</h1>
          <p
            style={{
              marginTop: 8,
              color: COLORS.copy,
              fontSize: 15,
              maxWidth: 760,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Explore unit types and layouts. Watch the short video tour of our playground and facilities —
            perfect for spending quality time with your children.
          </p>
        </header>

        {/* HERO VIDEO (clean YouTube embed) */}
        <section aria-label="Playground video tour" style={{ marginBottom: 18 }}>
          <div
            style={{
              width: "100%",
              borderRadius: 12,
              overflow: "hidden",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 6px 18px rgba(16,24,40,0.04)",
              background: "#000",
            }}
          >
            <div style={{ position: "relative", paddingTop: "40%" }}>
              <iframe
                title="Playground — M Legasi"
                src={PLAYGROUND_SRC}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "block",
                  pointerEvents: "none", // avoid interactions with iframe itself
                }}
                aria-hidden="true"
              />
              {/* Overlay to ensure no YouTube chrome / interactions are visible */}
              <div
                aria-hidden="true"
                onClick={(e) => e.preventDefault()}
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  background: "transparent",
                  pointerEvents: "auto",
                  cursor: "default",
                }}
              />
            </div>
          </div>
        </section>

        {/* Feature Pills */}
        <div
          style={{
            display: "flex",
            gap: 18,
            marginBottom: 18,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <FeaturePill text="Perfect for parent–child bonding" />
          <FeaturePill text="Family-friendly playground" />
        </div>

        {/* Units */}
        <section aria-label="Units list">
          <UnitsGrid />
        </section>
      </div>

      {/* Responsive tweak */}
      <style>{`
        @media (max-width: 720px) {
          section[aria-label="Playground video tour"] div[style*="padding-top: 40%"] {
            padding-top: 56%;
          }
        }
      `}</style>
    </div>
  );
}

/* Helper Component */
function FeaturePill({ text }) {
  return (
    <div
      style={{
        background: "#fff",
        border: `1px solid rgba(15,23,36,0.06)`,
        padding: "8px 12px",
        borderRadius: 999,
        fontSize: 14,
        color: "#334155",
        boxShadow: "0 1px 2px rgba(16,24,40,0.03)",
      }}
    >
      {text}
    </div>
  );
}
