import React from "react";

const units = [
  {
    id: "A",
    title: "Type A — Intermediate",
    dims: "20' x 60'",
    sqft: "1,555 sf",
    oldPrice: 691000,
    promoPrice: 534560,
    img: "/images/TypeA.png",
  },
  {
    id: "B",
    title: "Type B — Intermediate",
    dims: "20' x 65'",
    sqft: "1,555 sf",
    oldPrice: 693800,
    promoPrice: 536126,
    img: "/images/TypeB.png",
  },
  {
    id: "C",
    title: "Type C — Intermediate (Corner)",
    dims: "20' x 70'",
    sqft: "1,686 sf",
    oldPrice: 743800,
    promoPrice: 575772,
    img: "/images/TypeC.png",
  },
];

function formatRM(value) {
  // Format number with commas and no decimal places
  return value.toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

export default function UnitsGrid() {
  return (
    <section style={{ padding: "2.5rem 1rem", background: "#f8faf9" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#064e3b", textAlign: "center" }}>Unit Types & Layout</h2>
        <p style={{ color: "#6b7280", textAlign: "center", marginBottom: 18 }}>Explore the available unit layouts — Type A, B, and C.</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {units.map((u) => (
            <div key={u.id} style={{ background: "#fff", borderRadius: 12, padding: 12, boxShadow: "0 6px 18px rgba(2,6,23,0.04)" }}>
              <img src={u.img} alt={u.title} style={{ width: "100%", objectFit: "contain", borderRadius: 8, background: "#faf7f4" }} />
              <div style={{ paddingTop: 12 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#065f46" }}>{u.title}</div>
                <div style={{ color: "#6b7280", marginTop: 8 }}>{u.dims} • {u.sqft} • 4 Rooms • 3 Baths • 4 Car Parks</div>

                {/* pricing block */}
                <div style={{ marginTop: 10, display: "flex", alignItems: "baseline", gap: 12 }}>
                  <div style={{ color: "#6b7280", textDecoration: "line-through", fontWeight: 600 }}>
                    RM {formatRM(u.oldPrice)}
                  </div>

                  <div style={{ fontWeight: 900, color: "#064e3b", fontSize: 18 }}>
                    Only RM {formatRM(u.promoPrice)}
                  </div>
                </div>

                {/* small promo badge */}
                <div style={{ marginTop: 8 }}>
                  <span style={{
                    display: "inline-block",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#065f46",
                    background: "rgba(6,78,59,0.08)",
                    padding: "6px 8px",
                    borderRadius: 9999
                  }}>
                    Limited Offer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
