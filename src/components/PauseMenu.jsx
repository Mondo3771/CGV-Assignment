import React from "react";

export default function PauseMenu({
  Fog,
  shadows,
  setShadows,
  setFog,
  setIsPaused,
  setStartGame,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Game Paused</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Controls</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>⬆️ Up Arrow: Accelerate</li>
          <li>⬇️ Down Arrow: Brake/Reverse</li>
          <li>➡️ Right Arrow: Turn Right</li>
          <li>⬅️ Left Arrow: Turn Left</li>
          <li>Space: Drift</li>
          <li>C: Change Camera View</li>
          <li>R: Restart from the begining</li>
        </ul>
      </div>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "20px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          transition: "background-color 0.3s",
        }}
        onClick={() => setIsPaused(false)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
      >
        Resume
      </button>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "20px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#f44336",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          transition: "background-color 0.3s",
        }}
        onClick={() => {
          setIsPaused(false);
          setStartGame(false);
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#e53935")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#f44336")}
      >
        Main Menu
      </button>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "20px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#2196F3",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          transition: "background-color 0.3s",
        }}
        onClick={() => setShadows(!shadows)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196F3")}
      >
        Toggle Shadows
      </button>
      <button
        style={{
          padding: "12px 24px",
          fontSize: "20px",
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#2196F3",
          border: "none",
          borderRadius: "5px",
          color: "#fff",
          transition: "background-color 0.3s",
        }}
        onClick={() => setFog(!Fog)}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196F3")}
      >
        Toggle Fog
      </button>
      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}
      </style>
    </div>
  );
}