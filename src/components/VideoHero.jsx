import React, { useRef, useEffect, useState } from "react";

export default function VideoHero({
  src = "/videos/discover.mp4",
  poster = "/images/park.png",
}) {
  const videoRef = useRef(null);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const tryPlay = async () => {
      if (!videoRef.current) return;
      try {
        await videoRef.current.play();
        setAutoplayBlocked(false);
      } catch {
        setAutoplayBlocked(true);
      }
    };
    tryPlay();
  }, []);

  const handlePlay = async () => {
    try {
      await videoRef.current.play();
      setAutoplayBlocked(false);
    } catch {
      setAutoplayBlocked(true);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section style={{ padding: "2.5rem 1rem" }}>
      {/* FIX: Align header text with same column width */}
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: 22,
            marginBottom: 18,
            fontWeight: 700,
            color: "#064e3b",
          }}
        >
          Discover the Neighborhood
        </h2>
      </div>

      {/* Video wrapper aligned to same max width */}
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
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {autoplayBlocked && (
          <button
            onClick={handlePlay}
            style={{
              position: "absolute",
              right: 16,
              bottom: 16,
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              padding: "8px 12px",
              borderRadius: 8,
              cursor: "pointer",
              zIndex: 20,
            }}
          >
            ▶︎
          </button>
        )}

        <button
          onClick={handleFullscreen}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            borderRadius: 6,
            cursor: "pointer",
            zIndex: 20,
          }}
        >
          ⛶
        </button>
      </div>

      {/* 3 Image cards aligned to same width */}
      <div
        className="three-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 18,
          marginTop: 20,
          maxWidth: 1120,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="thumb-card" style={cardStyle}>
          <img src="/images/school.png" alt="Nearby Schools" style={imgStyle} />
          <p style={textStyle}>Nearby Schools</p>
        </div>

        <div className="thumb-card" style={cardStyle}>
          <img src="/images/supermarket.png" alt="Supermarket" style={imgStyle} />
          <p style={textStyle}>Supermarket</p>
        </div>

        <div className="thumb-card" style={cardStyle}>
          <img src="/images/hospital.png" alt="Hospitals" style={imgStyle} />
          <p style={textStyle}>Hospitals & Clinics</p>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: 10,
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  textAlign: "center",
};

const imgStyle = {
  width: "100%",
  height: 220,
  objectFit: "cover",
};

const textStyle = {
  margin: "10px 0",
  fontSize: 15,
  fontWeight: 600,
};
