import React from "react";

/**
 * amenities: [
 *  { id, title, type, distance, img, note }
 * ]
 *
 * Images referenced are relative to /public/images/amenities/
 */

export default function AmenitiesGrid({ amenities }) {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 18
      }}>
        {amenities.map(a => (
          <div key={a.id} style={{
            background: "#fff",
            borderRadius: 12,
            padding: 12,
            boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
            display: "flex",
            gap: 12,
            alignItems: "flex-start"
          }}>
            <div style={{ width: 92, height: 68, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "#f6f6f6", display: "grid", placeItems: "center" }}>
              <img src={a.img} alt={a.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover", display: "block" }} />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, color: "#065f46", fontSize: 15 }}>{a.title}</div>
              <div style={{ color: "#6b7280", marginTop: 6, fontSize: 14 }}>
                <strong>{a.type}</strong> · {a.distance}
              </div>
              {a.note && <div style={{ color: "#9ca3af", marginTop: 8, fontSize: 13 }}>{a.note}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* responsive grid styles hint (if you use styles.css) */}
      <style>{`
        @media (max-width: 1100px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 700px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
