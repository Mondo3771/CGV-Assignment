import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Nether } from "../assets/track/Track2/Nether";
import { NetherHome } from "../assets/Home/NetherHome";
import { EndHome } from "../assets/Home/EndHome";
import { CherryBlossomHome } from "../assets/Home/CherryBlossomHome";
import { Hummer } from "./Cars/Hummer";
import Loader from "./Loader";
import { HomeHummer } from "../assets/Home/HomeHummer";
import { HomeNissan } from "../assets/Home/HomeNissan";
import { HomeCar } from "../assets/Home/HomeCar";
import logo from "./images/logo.png"

export default function StartMenu({ onTrackSelect, onCarSelect }) {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);
  const [Home, setHome] = useState(1);
  const [carIndex, setCarIndex] = useState(0);
  const [showCredits, setShowCredits] = useState(false); // State to control the credits modal
  const [showControls, setShowControls] = useState(false); // State for controls modal

  let color = "#fc4b4b";
  let lightColor = "#fc4b4b";
  let far = 100;

  if (Home === 1) {
    far = 125;
    color = "#d691ca";
    lightColor = "#f8def4";
  } else if (Home === 2) {
    far = 85;
    color = "#fc4b4b";
    lightColor = "#fc4b4b";
  } else if (Home === 3) {
    far = 100;
    color = "#5a5151";
    lightColor = "#ffffff";
  }

  const handleCarChange = (direction) => {
    setCarIndex((prev) =>
      direction === "next" ? (prev + 1) % 3 : Math.max(prev - 1, 0)
    );
  };

  React.useEffect(() => {
    setLoading(progress < 100);
  }, [progress]);

  return (
    <>
      {loading ? (
        <Loader progress={progress} />
      ) : (
        <Suspense fallback={<Loader />}>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#fff",
              zIndex: 1,
            }}
          >
            <h1 style={{ fontSize: "48px", marginBottom: "150px" }}>
              <img src={logo} />
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
                marginBottom: "20px",
              }}
            >
              <button
                onClick={() => handleCarChange("prev")}
                disabled={loading}
                style={{ ...sideButtonStyle, marginRight: "auto" }}
              >
                {"<"} Prev Car
              </button>
              <button
                onClick={() => handleCarChange("next")}
                disabled={loading}
                style={{ ...sideButtonStyle, marginLeft: "auto" }}
              >
                Next Car {">"}
              </button>
            </div>
            <h2>Select a Track</h2>

            <div
              className="button-container"
              style={{ display: "flex", gap: "10px" }}
            >
              <button
                onClick={() => setHome(1)}
                disabled={loading}
                style={buttonStyle}
              >
                Cherry Blossom
              </button>
              <button
                onClick={() => setHome(2)}
                disabled={loading}
                style={buttonStyle}
              >
                Nether Realm
              </button>
              <button
                onClick={() => setHome(3)}
                disabled={loading}
                style={buttonStyle}
              >
                End Map
              </button>
              <button
                onClick={() => {
                  onTrackSelect(Home);
                  onCarSelect(carIndex + 1);
                }}
                disabled={loading}
                style={{
                  ...buttonStyle,
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Play
              </button>
            </div>
            <div
              className="button-container"
              style={{ display: "flex", gap: "10px" }}
            >
              <button
                onClick={() => setShowCredits(true)} // Open the credits modal
                style={{
                  ...buttonStyle,
                  marginTop: "10px",
                  backgroundColor: "#333",
                }}
              >
                Credits
              </button>
              <button
                onClick={() => setShowControls(true)}
                style={{
                  ...buttonStyle,
                  marginTop: "10px",
                  backgroundColor: "#333",
                }}
              >
                Controls
              </button>
            </div>

            {showCredits && (
              <div className="overlay" onClick={() => setShowCredits(false)}>
                <div className="modal">
                  <h2>Credits</h2>
                  <p>
                    Thanks to all the contributors and artists for the 3D models
                    used in this game!
                  </p>
                  <button
                    onClick={() => setShowCredits(false)}
                    style={buttonStyle}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {/* Controls Modal */}
            {showControls && (
              <div className="overlay" onClick={() => setShowControls(false)}>
                <div className="modal">
                  <h2>Game Controls</h2>
                  <ul>
                    <li>Move Forward: W</li>
                    <li>Move Backward: S</li>
                    <li>Turn Left: A</li>
                    <li>Turn Right: D</li>
                    <li>Jump: Space</li>
                    {/* Add more controls as needed */}
                  </ul>
                  <button
                    onClick={() => setShowControls(false)}
                    style={buttonStyle}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <Canvas
            antialias="true"
            shadows
            camera={{ fov: 60, near: 0.1, far: 2000, position: [0, 50, 200] }}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <fog attach="fog" color={color} near={1} far={far} />
            <ambientLight intensity={-2} />
            <directionalLight
              color={lightColor}
              castShadow={true}
              position={[85, 150, 0]}
              intensity={10}
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-left={-1000}
              shadow-camera-right={1000}
              shadow-camera-top={1000}
              shadow-camera-bottom={-1000}
              shadow-camera-near={1}
              shadow-camera-far={1500}
              shadow-bias={-0.001}
            />
            {Home === 1 && <CherryBlossomHome />}
            {Home === 2 && <NetherHome />}
            {Home === 3 && <EndHome />}
            {carIndex + 1 === 2 && (
              <HomeHummer
                position={[0, 46, 192]}
                rotation={[0, (3 * Math.PI) / 4, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            )}
            {carIndex + 1 === 3 && (
              <HomeNissan
                position={[-2, 46, 191]}
                rotation={[0, (3 * Math.PI) / 4, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            )}
            {carIndex + 1 === 1 && (
              <HomeCar
                position={[-0.05, 46, 192.65]}
                rotation={[0, (7 * Math.PI) / 4, 0]}
                scale={[0.8, 0.8, 0.8]}
              />
            )}
          </Canvas>
        </Suspense>
      )}
    </>
  );
}

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "20px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "#2196F3",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
};

const sideButtonStyle = {
  padding: "10px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#2196F3",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  zIndex: 1000,
};
