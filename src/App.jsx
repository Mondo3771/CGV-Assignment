import React, { useRef, useState, useEffect, Suspense } from "react";
import Nether from "./components/Nether";
import { Canvas } from "@react-three/fiber";
import { RigidBody, Physics } from "@react-three/rapier";
import { Car } from "./components/Car";
import { RaceTrackWalls } from "./assets/track/Track1/CherryBlossomRawTrack";
import { Timer } from "./components/Timer";
import BackgroundMusic from "./components/BackgroundMusic";
import DustParticles from "./components/DustParticles/DustParticles";
import HUD from "./components/HUD";
import Loader from "./components/Loader";
import { NetherRawTrackWalls } from "./assets/track/Track2/NetherRawTrack";
import { WholeNetherMap } from "./assets/track/Track2/WholeNetherMap";
import { Map } from "./assets/track/Track1/WholeMap";
import { getBaseUrl } from "./utils/getURL";

export default function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [carSpeed, setCarSpeed] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // Track if the game is paused
  const [activeGroup, setActiveGroup] = useState(null);
  const carRef = useRef();

  // Disable controls if paused
  const isControlDisabled = isPaused;

  // Listen for key presses, including Esc to toggle pause
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isControlDisabled) return; // Prevent controls if paused

      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
      ) {
        setStartTimer(true); // Start the timer
      }
      if (event.key === "r" || event.key === "R") {
        setStartTimer(false); // Reset the timer
      }
      if (event.key === "Escape") {
        setIsPaused((prev) => !prev); // Toggle pause state
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isControlDisabled]);

  return (
    <>
      {/* Pause Menu Overlay */}
      {isPaused && !!activeGroup ? (
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
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Game Paused
          </h1>

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
              setActiveGroup(null);
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
            onClick={() => setShadows((prev) => !prev)}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e88e5")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2196F3")}
          >
            Toggle Shadows
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
      ) : null}

      {!activeGroup ? (
        <div>
          <button
            onClick={() => setActiveGroup(1)}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "Black",
              fontSize: "44px",
            }}
          >
            Load Group 1
          </button>
          <button
            onClick={() => setActiveGroup(2)}
            style={{
              position: "absolute",
              top: "20px",
              left: "320px",
              color: "Black",
              fontSize: "44px",
            }}
          >
            Load Group 2
          </button>
        </div>
      ) : (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              color: "Black",
              fontSize: "44px",
              zIndex: 1,
            }}
          >
            <Timer startTimer={startTimer} />
          </div>
          <HUD speed={carSpeed} currentLap={3} maxLap={15} />

          <Canvas
            // shadows
            camera={{ fov: 60, near: 0.1, far: 2000, position: [0, 50, 200] }}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={1} />
              <directionalLight
                color={"#fbe8fd"}
                castShadow
                position={[85, 75, 0]}
                intensity={10}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-camera-left={-500}
                shadow-camera-right={500}
                shadow-camera-top={500}
                shadow-camera-bottom={-500}
                shadow-camera-near={1}
                shadow-camera-far={1500}
                shadow-bias={-0.001}
              />
              {activeGroup == 2 ? <Map /> : <WholeNetherMap />}

              <Physics gravity={[0, -90.81, 0]} paused={isPaused}>
                {activeGroup == 2 ? (
                  <RaceTrackWalls />
                ) : (
                  <NetherRawTrackWalls />
                )}
                <RigidBody type="fixed" position={[0, 0, 0]}>
                  <mesh
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                  >
                    <planeGeometry args={[1000, 1000]} />
                    <meshStandardMaterial
                      color="green"
                      transparent
                      opacity={0}
                    />
                  </mesh>
                </RigidBody>

                <Car
                  rigidBody={carRef}
                  onSpeedChange={setCarSpeed}
                  disabled={isPaused} // Disable car controls when paused
                />
                <DustParticles carRef={carRef} />
              </Physics>

              <BackgroundMusic />
            </Suspense>
          </Canvas>
        </div>
      )}
    </>
  );
}
