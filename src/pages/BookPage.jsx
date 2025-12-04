// src/pages/BookPage.jsx
import React, { useState } from "react";

/**
 * BookPage — submit directly to Google Forms (formResponse) without redirect.
 * - Uses a hidden form + hidden iframe to POST data to Google.
 * - Note: response is not readable due to CORS; we show an optimistic success message.
 *
 * Requirements:
 * - FIELD_IDS must match your Google Form entry IDs (already filled from your prefill link).
 * - FORM_ACTION must be the Google formResponse endpoint for your form.
 */

const COLORS = {
  ink: "#0f1724",
  copy: "#4b5563",
  accent: "#065f46",
  cardBg: "#ffffff",
  border: "rgba(15,23,36,0.08)",
  subtle: "#f6f9f7",
};

// Google Form endpoints / IDs (from your prefilled link)
const FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfz2Kdgh8Q_v3WuP05jybnojAeIk1AZxwolWprfKop94SwoLA/formResponse";
const FIELD_IDS = {
  name: "entry.1623702764",
  phone: "entry.307574555",
  email: "entry.226559707",
  city: "entry.706402315",
  prefTime: "entry.37580560",
  message: "entry.1272408800",
};

export default function BookPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [prefTime, setPrefTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePhone = (p) => /^\d{7,15}$/.test(p.replace(/\s+/g, ""));
  const validateEmail = (em) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);

  function clearForm() {
    setName("");
    setPhone("");
    setEmail("");
    setCity("");
    setPrefTime("");
    setMessage("");
    setError("");
  }

  // Core: create a hidden form, append inputs, target a hidden iframe, submit it.
  function submitToGoogleForm(values) {
    // Create hidden iframe
    const iframeName = "hidden-gform-iframe-" + Date.now();
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    // Create form element
    const form = document.createElement("form");
    form.action = FORM_ACTION;
    form.method = "POST";
    form.target = iframeName;
    form.style.display = "none";

    // Append inputs for each field id
    for (const [key, entryId] of Object.entries(FIELD_IDS)) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = entryId;
      input.value = values[key] ?? "";
      form.appendChild(input);
    }

    // Append and submit
    document.body.appendChild(form);

    // Submit the form (this will POST to Google and the response loads into the hidden iframe)
    form.submit();

    // cleanup after a short delay (give browser time to post)
    setTimeout(() => {
      try {
        document.body.removeChild(form);
      } catch (err) {}
      try {
        document.body.removeChild(iframe);
      } catch (err) {}
    }, 3000);
  }

  async function handleSubmit(e) {
    e?.preventDefault();
    setError("");
    setSent(false);

    if (!name.trim()) return setError("Please enter your full name.");
    if (!phone.trim() || !validatePhone(phone))
      return setError("Please enter a valid phone number (digits only).");
    if (!email.trim() || !validateEmail(email))
      return setError("Please enter a valid email address.");
    if (!city.trim()) return setError("Please enter the city you are currently staying in.");

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      city: city.trim(),
      prefTime: prefTime || "",
      message: message.trim() || "",
    };

    setLoading(true);

    try {
      // Submit via hidden form to Google Forms
      submitToGoogleForm(payload);

      // Optimistically assume success (we cannot read response due to CORS)
      alert("Thank you — your inquiry had been send. We'll contact you shortly.");
      clearForm();
      setSent(true);
    } catch (err) {
      console.error("Submit error", err);
      setError("Couldn't submit form. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ background: "#fbfdfc", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2.25rem 1rem" }}>
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
            or call.
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
          {/* Left: form */}
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
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ""))}
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
                    <Label>Preferred time contact (optional)</Label>
                    <select value={prefTime} onChange={(e) => setPrefTime(e.target.value)} style={SELECT}>
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
                    disabled={sent || loading}
                    style={{
                      background: COLORS.accent,
                      color: "#fff",
                      border: "none",
                      padding: "12px 18px",
                      borderRadius: 10,
                      fontWeight: 800,
                      cursor: sent || loading ? "default" : "pointer",
                      fontSize: 16,
                      marginTop: 10,
                      opacity: sent || loading ? 0.85 : 1,
                    }}
                  >
                    {loading ? "Sending..." : sent ? "Submitted" : "Send enquiry"}
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
                    <TinyDot text="Developer: Zero Downpayment" />
                    <TinyDot text="Developer: Construction Subsidy" />
                    <TinyDot text="Developer: FREE SPA,LA & MOT" />
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
                Thank you — your inquiry had been send. We'll contact you shortly.
              </div>
            )}
          </div>

          {/* Right: media */}
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
        src={`https://www.youtube-nocookie.com/embed/9jNRNv6HbvU?autoplay=1&mute=1&loop=1&playlist=9jNRNv6HbvU&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`}
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
