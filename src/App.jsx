import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import UnitsPage from "./pages/UnitsPage";
import BookPage from "./pages/BookPage";
import LocationPage from "./pages/LocationPage";

export default function App() {
  return (
    // make app a column that fills viewport
    <div
      className="app-root"
      style={{
        fontFamily: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      {/* make main grow to fill available vertical space so footer stays at bottom */}
      <main style={{ paddingTop: 64, flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/location" element={<LocationPage />} />
          {/* add more pages here later if needed */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
