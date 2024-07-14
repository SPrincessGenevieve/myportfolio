"use client";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Info from "./Pages/Info";
import Project from "./Pages/Project";
import Navbar from "./Components/Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import L1 from "./Assets/Layers/L1.png";
import L2 from "./Assets/Layers/L2.png";
import L3 from "./Assets/Layers/L3.png";
import L4 from "./Assets/Layers/L4.png";
import L5 from "./Assets/Layers/L5.png";
import tree2 from "./Assets/Layers/tree2.png";
import ContactMe from "./Components/ContactMe";

export default function App() {
  const offset = 8;

  return (
    <main className="App">
      <div>
        <Parallax pages={9}>
          <ParallaxLayer offset={0}>
            <Home></Home>
          </ParallaxLayer>

          <ParallaxLayer offset={1}>
            <About></About>
          </ParallaxLayer>

          <ParallaxLayer style={{ marginTop: "30%" }} offset={3}>
            <Project></Project>
          </ParallaxLayer>

          <ParallaxLayer
            style={{ marginTop: "30%" }}
            offset={8}
            speed={9}
            factor={5}
          >
            {/* <Contact></Contact> */}
          </ParallaxLayer>
          <ParallaxLayer
            offset={offset}
            speed={0.5}
            style={{
              backgroundImage: `url(${L1.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={offset}
            speed={0.7}
            style={{
              backgroundImage: `url(${L2.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={offset}
            speed={1}
            style={{
              backgroundImage: `url(${L3.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>

          <ParallaxLayer
            offset={offset}
            speed={1}
            style={{
              backgroundImage: `url(${L3.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={offset}
            speed={2}
            style={{
              backgroundImage: `url(${tree2.src})`,
              backgroundSize: "contain",
            }}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={offset}
            speed={1}
            style={{
              backgroundImage: `url(${L5.src})`,
              backgroundSize: "cover",
            }}
          ></ParallaxLayer>
          <ParallaxLayer offset={offset}
            speed={1}>
            <div
              style={{ width: "100%", height: "400vh", backgroundColor: "#9e6f71", marginTop: "15%" }}
            >
              <ContactMe></ContactMe>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
