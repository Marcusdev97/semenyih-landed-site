// src/components/VideoHero.jsx
import React from "react";

/**
 * VideoHero — Discover video (clean YouTube embed)
 *
 * - Uses youtube-nocookie domain to reduce tracking
 * - Player params remove chrome: controls=0, modestbranding=1, rel=0, etc.
 * - Autoplay muted loop via autoplay=1&mute=1&loop=1&playlist=<id>
 * - A transparent overlay intercepts pointer events so the YouTube UI and interactions are not visible/usable
 *
 * Accessibility note:
 * - The iframe has a descriptive title for assistive tech.
 * - The overlay is aria-hidden so it won't confuse screen readers.
 */

const DEFAULT_VIDEO_ID = "Emsz_A6XHGM";

export default function VideoHero({ videoId = DEFAULT_VIDEO_ID, poster = "/images/park.png" }) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`;

  return (
    <section style={{ padding: "2.5rem 1rem" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#064e3b", marginBottom: 18 }}>
          Discover the Neighborhood
        </h2>
      </div>

      <div
        className="vh-root"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1120,
          height: 380,
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: 14,
          background: "#000",
        }}
      >
        <iframe
          title="Discover — M Legasi (neighborhood tour)"
          src={src}
          frameBorder="0"
          allow="autoplay; encrypted-media; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
            pointerEvents: "none", // prevent direct interaction with the iframe itself
          }}
        />

        {/* Transparent overlay to ensure no YouTube chrome / interactions are visible.
            We capture pointer events here so the iframe remains non-interactive.
            aria-hidden so screen readers ignore this decorative overlay. */}
        <div
          aria-hidden="true"
          onClick={(e) => e.preventDefault()}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            background: "transparent",
            cursor: "default",
            // capture pointer events so underlying iframe UI cannot be triggered
            pointerEvents: "auto",
          }}
        />
      </div>
    </section>
  );
}
