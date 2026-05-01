import React from 'react';
import '@fontsource/bebas-neue';

function App() {
  return (
    <>
      <video
        src="/banner.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100vw",
          height: "620px",
          objectFit: "cover"
        }}
      />
      <p style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "24px",
        fontWeight: "700",
        color: "white",
        textAlign: "center",
        margin: "15px auto",
        maxWidth: "600px",
        backgroundColor: "rgba(0,0,0,0.6)"
      }}>
        Hey, I'm UnCutHugeGuy, AKA Mason French from Essex. Massive cock, filthy videos, proper dirty photos, and I'm always up for a bit of fun. Get in touch.
      </p>
      <p style={{
        fontSize: "18px",
        marginTop: "20px",
        textAlign: "center",
        color: "white"
      }}>
        Coming soon...
      </p>
    </>
  );
}

export default App;