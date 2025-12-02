// src/components/Header.jsx  (replace existing file)
import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const waLink = `https://wa.me/601133698121?text=${encodeURIComponent("Hi Marcus, I'm interested in M Legasi")}`;

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, background: '#fff', zIndex: 50,
      borderBottom: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 1rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ height: 36, width: 36, borderRadius: 8, background: '#059669', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700 }}>M</div>
          <div style={{ fontWeight: 600 }}>M Legasi - Semenyih</div>
        </div>

        <nav style={{ display: 'flex', gap: 18 }}>
          <NavLink to="/" end style={{ textDecoration: 'none' }}>Home</NavLink>
          <NavLink to="/location" style={{ textDecoration: 'none' }}>Location</NavLink>
          <NavLink to="/units" style={{ textDecoration: 'none' }}>Units</NavLink>
          <NavLink to="/book" style={{ textDecoration: 'none' }}>Contact Us</NavLink>
        </nav>

        <div>
          <a href={waLink} style={{ background: '#10b981', color: '#fff', padding: '8px 12px', borderRadius: 6, textDecoration: 'none' }}>WhatsApp</a>
        </div>
      </div>
    </header>
  );
}
