import React from "react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #e5e7eb',
      marginTop: 24,
      background: '#fff'
    }}>
      <div style={{
        maxWidth: 1120,
        margin: '0 auto',
        padding: '2rem 1rem',
        textAlign: 'center',
        color: '#6b7280'
      }}>
        <div>M Legasi - Semenyih | Marcus · REN 78211</div>
        <div>Phone/WhatsApp: (+60) 113369 8121 · Email: marcuschin.biz91@gmail.com</div>
        <div style={{ marginTop: 8 }}>
          © {new Date().getFullYear()} Marcus Property. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
