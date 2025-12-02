// src/pages/BookPage.jsx
import React, { useState } from "react";

/**
 * ContactPage — simplified form + clean showroom video (YouTube embed)
 * - Showroom Video ID: 9jNRNv6HbvU
 * - No YouTube UI (controls, branding hidden)
 * - Autoplay, muted, loop enabled
 * - Overlay blocks iframe interactions to keep it purely visual
 */

const COLORS = {
  ink: "#0f1724",
  copy: "#4b5563",
  accent: "#065f46",
  cardBg: "#ffffff",
  border: "rgba(15,23,36,0.08)",
  subtle: "#f6f9f7",
};

const SUBMIT_EMAIL = "marcuschin.biz91@gmail.com";

// YouTube showroom video — clean embed
const SHOWROOM_ID = "9jNRNv6HbvU";
const SHOWROOM_SRC = `https://www.youtube-nocookie.com/embed/${SHOWROOM_ID}?autoplay=1&mute=1&loop=1&playlist=${SHOWROOM_ID}&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`;

export default function BookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const validatePhone = (p) => /^\d{7,15}$/.test(p.replace(/\s+/g, ""));
  const validateEmail = (em) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

  function handleSubmit(e) {
    e?.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim()) return setError("Please enter your full name.");
    if (!phone.trim() || !validatePhone(phone))
      return setError("Please enter a valid phone number (digits only).");
    if (!email.trim() || !validateEmail(email))
      return setError("Please enter a valid email address.");
    if (!city.trim()) return setError("Please enter the city you are currently staying in.");

    const lines = [
      "Inquiry: Contact Us — M Legasi",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `City: ${city.trim()}`,
      prefTime ? `Preferred time: ${prefTime}` : "",
      message.trim() ? `Message: ${message.trim()}` : "",
    ].filter(Boolean);

    const subject = encodeURIComponent("M Legasi — Contact Us Inquiry");
    const body = encodeURIComponent(lines.join("\n"));
    const mailto = `mailto:${SUBMIT_EMAIL}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div style={{ background: "#fbfdfc", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.25rem 1rem" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h1 style={{ margin: 0, color: COLORS.ink, fontSize: 32, letterSpacing: -0.3 }}>
            Contact Us
          </h1>
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
            Have a question about M Legasi? Tell us how we can help — we reply quickly via WhatsApp
            or email.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 22,
            alignItems: "start",
          }}
        >
          {/* LEFT — FORM */}
          <div>
            <div
              style={{
                background: COLORS.cardBg,
                borderRadius: 12,
                padding: 18,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <form onSubmit={handleSubmit} aria-label="Contact Form">
                <div style={{ display: "grid", gap: 12 }}>
                  
                  <Label>Full name</Label>
                  <input
                    aria-label="Full name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    style={INPUT}
                  />

                  <Label>Phone number (digits only)</Label>
                  <input
                    aria-label="Phone"
                    required
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/[^\d]/g, ""))
                    }
                    placeholder="e.g. 6011xxxxxxxx"
                    style={INPUT}
                  />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <Label>Email</Label>
                      <input
                        aria-label="Email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        style={INPUT}
                      />
                    </div>

                    <div>
                      <Label>City (currently staying)</Label>
                      <input
                        aria-label="City"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Semenyih / KL"
                        style={INPUT}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Preferred time (optional)</Label>
                    <select
                      value={prefTime}
                      onChange={(e) => setPrefTime(e.target.value)}
                      style={SELECT}
                    >
                      <option value="">Anytime</option>
                      <option>Morning (9am–12pm)</option>
                      <option>Afternoon (12pm–4pm)</option>
                      <option>Evening (4pm–8pm)</option>
                    </select>
                  </div>

                  <div>
                    <Label>Message (optional)</Label>
                    <textarea
                      aria-label="Message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more (e.g. which unit you're interested in)"
                      style={TEXTAREA}
                    />
                  </div>

                  {error && <div style={{ color: "#b91c1c" }}>{error}</div>}

                  <button
                    type="submit"
                    disabled={sent}
                    style={{
                      background: COLORS.accent,
                      color: "#fff",
                      border: "none",
                      padding: "12px 18px",
                      borderRadius: 10,
                      fontWeight: 800,
                      cursor: sent ? "default" : "pointer",
                      fontSize: 16,
                      marginTop: 10,
                      opacity: sent ? 0.85 : 1,
                    }}
                  >
                    {sent ? "Inquiry Opened" : "Send enquiry"}
                  </button>

                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      color: COLORS.copy,
                      fontSize: 13,
                      marginTop: 8,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <TinyDot text="Developer: MahSing" />
                    <TinyDot text="We reply on WhatsApp / Call" />
                  </div>
                </div>
              </form>
            </div>

            {sent && (
              <div
                style={{
                  marginTop: 12,
                  padding: 12,
                  borderRadius: 8,
                  background: "#ecfdf5",
                  border: `1px solid rgba(6,95,70,0.12)`,
                  color: "#065f46",
                  fontWeight: 700,
                }}
              >
                Thank you — your email app opened. We'll contact you shortly.
              </div>
            )}
          </div>

          {/* RIGHT — MEDIA + WHY CONTACT */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                border: `1px solid ${COLORS.border}`,
                background: COLORS.cardBg,
              }}
            >
              <MediaBox />
            </div>

            <div style={{ color: COLORS.copy, fontSize: 14 }}>
              <div style={{ fontWeight: 800, color: COLORS.ink }}>Why contact us?</div>
              <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                <li>Get current availability & pricing</li>
                <li>Ask about financing & downpayment</li>
                <li>Schedule a showroom visit</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Responsive */}
        <style>{`
          @media (max-width: 980px) {
            div[style*="grid-template-columns: 1fr 360px"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

/* ---------- Shared UI Components ---------- */

function Label({ children }) {
  return <div style={{ marginBottom: 4, color: "#44505A", fontWeight: 700 }}>{children}</div>;
}

function TinyDot({ text }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <div style={{ width: 8, height: 8, borderRadius: 99, background: "#065f46" }} />
      <div>{text}</div>
    </div>
  );
}

const INPUT = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(15,23,36,0.08)`,
  height: 44,
  fontSize: 15,
  outline: "none",
  boxSizing: "border-box",
};

const SELECT = {
  ...INPUT,
  appearance: "none",
  background:
    "linear-gradient(45deg, transparent 50%, #000 50%), linear-gradient(135deg, #000 50%, transparent 50%)",
  backgroundPosition:
    "calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px)",
  backgroundSize: "6px 6px",
  backgroundRepeat: "no-repeat",
  paddingRight: 36,
};

const TEXTAREA = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(15,23,36,0.08)`,
  fontSize: 15,
  minHeight: 96,
  outline: "none",
  resize: "vertical",
  boxSizing: "border-box",
};

/* ---------- Clean Video Component ---------- */

function MediaBox() {
  return (
    <div style={{ width: "100%", height: 260, background: "#f6f6f6", position: "relative" }}>
      <iframe
        title="Showroom — M Legasi"
        src={SHOWROOM_SRC}
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

      {/* UI-blocking overlay */}
      <div
        aria-hidden="true"
        onClick={(e) => e.preventDefault()}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "transparent",
          pointerEvents: "auto",
        }}
      />
    </div>
  );
}
