// src/pages/BookPage.jsx
import React, { useState } from "react";

/**
 * ContactPage — simplified form
 * - Removed: Interest, Preferred contact method, consent checkbox, "No obligation"
 * - Kept: Preferred time (optional)
 * - Submits via mailto: (uses SUBMIT_EMAIL)
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

export default function BookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const validatePhone = (p) => {
    const n = p.replace(/\s+/g, "");
    return /^\d{7,15}$/.test(n);
  };

  const validateEmail = (em) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

  function handleSubmit(e) {
    e?.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim()) return setError("Please enter your full name.");
    if (!phone.trim() || !validatePhone(phone)) return setError("Please enter a valid phone number (digits only).");
    if (!email.trim() || !validateEmail(email)) return setError("Please enter a valid email address.");
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

    // open mail client
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div style={{ background: "#fbfdfc", minHeight: "100vh", paddingTop: 0 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.25rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h1 style={{ margin: 0, color: COLORS.ink, fontSize: 32, letterSpacing: -0.3 }}>
            Contact Us
          </h1>
          <p style={{ marginTop: 8, color: COLORS.copy, fontSize: 15, maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>
            Have a question about M Legasi? Tell us how we can help — we reply quickly via WhatsApp or email.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: 22,
            alignItems: "start",
          }}
        >
          {/* LEFT: FORM */}
          <div>
            <div
              style={{
                background: COLORS.cardBg,
                borderRadius: 12,
                padding: 18,
                border: `1px solid ${COLORS.border}`,
                boxSizing: "border-box",
              }}
            >
              <form onSubmit={handleSubmit} aria-label="Contact us form">
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
                    aria-label="Phone number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
                    placeholder="e.g. 6011xxxxxxxx"
                    inputMode="tel"
                    style={INPUT}
                  />

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div>
                      <Label>Email</Label>
                      <input
                        aria-label="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        type="email"
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

                  <div style={{ display: "flex", gap: 12 }}>
                    <div style={{ flex: 1 }}>
                      <Label>Preferred time (optional)</Label>
                      <select value={prefTime} onChange={(e) => setPrefTime(e.target.value)} style={SELECT}>
                        <option value="">Anytime</option>
                        <option>Morning (9am–12pm)</option>
                        <option>Afternoon (12pm–4pm)</option>
                        <option>Evening (4pm–8pm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label>Message (optional)</Label>
                    <textarea
                      aria-label="Message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more (e.g. which unit type you're interested in)."
                      style={TEXTAREA}
                    />
                  </div>

                  {error && <div style={{ color: "#b91c1c", marginTop: 4 }}>{error}</div>}

                  <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 6 }}>
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
                        flex: 1,
                        fontSize: 16,
                        opacity: sent ? 0.85 : 1,
                      }}
                    >
                      {sent ? "Inquiry Opened" : "Send enquiry"}
                    </button>
                  </div>

                  <div style={{ display: "flex", gap: 12, marginTop: 8, color: COLORS.copy, fontSize: 13, alignItems: "center", flexWrap: "wrap" }}>
                    <TinyDotText text="Developer: MahSing" />
                    <TinyDotText text="We reply on WhatsApp / Call" />
                  </div>
                </div>
              </form>
            </div>

            <div style={{ marginTop: 12, color: COLORS.copy, fontSize: 13 }}>
              <div style={{ fontWeight: 700, color: COLORS.ink }}>Response times</div>
              <div style={{ marginTop: 6 }}>
                We typically reply within a few hours during business hours. If you prefer immediate contact, please choose WhatsApp.
              </div>
            </div>

            {sent && (
              <div style={{ marginTop: 12, padding: 12, borderRadius: 8, background: "#ecfdf5", border: `1px solid rgba(6,95,70,0.12)`, color: "#065f46", fontWeight: 700 }}>
                Thank you — your default mail client opened. We'll contact you to follow up.
              </div>
            )}
          </div>

          {/* RIGHT: MEDIA / WHY CONTACT */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: `1px solid ${COLORS.border}`, background: COLORS.cardBg, boxSizing: "border-box" }}>
              <MediaBox />
            </div>

            <div style={{ color: COLORS.copy, fontSize: 14 }}>
              <div style={{ fontWeight: 800, color: COLORS.ink }}>Why contact us?</div>
              <ul style={{ marginTop: 8, paddingLeft: 18, color: COLORS.copy }}>
                <li>Get current availability & pricing</li>
                <li>Ask about financing and downpayment plans</li>
                <li>Schedule an in-person showroom visit</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* responsive tweaks */}
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

/* ---------- styles + small components ---------- */

const INPUT = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(15,23,36,0.08)`,
  height: 44,
  fontSize: 15,
  boxSizing: "border-box",
  outline: "none",
};

const SELECT = {
  ...INPUT,
  appearance: "none",
  backgroundImage: `linear-gradient(45deg, transparent 50%, #000 50%), linear-gradient(135deg, #000 50%, transparent 50%)`,
  backgroundPosition: "calc(100% - 18px) calc(1em + 2px), calc(100% - 13px) calc(1em + 2px)",
  backgroundSize: "6px 6px, 6px 6px",
  backgroundRepeat: "no-repeat",
  paddingRight: 36,
};

const TEXTAREA = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 8,
  border: `1px solid rgba(15,23,36,0.08)`,
  fontSize: 15,
  outline: "none",
  resize: "vertical",
  minHeight: 96,
  boxSizing: "border-box",
};

function Label({ children }) {
  return <div style={{ marginBottom: 4, color: "#44505A", fontWeight: 700 }}>{children}</div>;
}

function TinyDotText({ text }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <div style={{ width: 8, height: 8, borderRadius: 99, background: "#065f46" }} />
      <div>{text}</div>
    </div>
  );
}

function MediaBox() {
  const mp4 = "/videos/showroom.mp4";
  const img = "/images/TypeA.png";
  return (
    <div style={{ width: "100%", height: 260, background: "#f6f6f6" }}>
      <video
        src={mp4}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      >
        <img src={img} alt="Showroom" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </video>
    </div>
  );
}
