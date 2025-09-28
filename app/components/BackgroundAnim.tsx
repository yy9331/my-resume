"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BackgroundAnim() {
  const [init, setInit] = useState(false);
  const [themeKey, setThemeKey] = useState("dark");

  // Initialize the tsParticles engine once
  useEffect(() => {
    console.log("🎨 Initializing tsParticles engine...");
    initParticlesEngine(async (engine) => {
      console.log("🔧 Loading tsParticles slim...");
      await loadSlim(engine);
      console.log("✅ tsParticles slim loaded successfully");
    }).then(() => {
      console.log("🚀 tsParticles engine initialized, setting init to true");
      setInit(true);
    }).catch((error) => {
      console.error("❌ Failed to initialize tsParticles:", error);
    });
  }, []);

  // Initialize theme and monitor theme changes
  useEffect(() => {
    // Set initial theme
    const initialTheme = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
    setThemeKey(initialTheme);
    
    // Monitor theme changes
    const obs = new MutationObserver(() => {
      const newTheme = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
      setThemeKey(newTheme);
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const options = useMemo(() => {
    const light = themeKey === "light";
    const colors = light
      ? ["#b45309", "#1d4ed8", "#047857"]
      : ["#f59e0b", "#3b82f6", "#10b981"];
    return {
      fullScreen: { enable: false },
      detectRetina: true,
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: colors },
        opacity: { 
          value: light ? 0.4 : 0.6,
          random: { enable: true, minimumValue: light ? 0.2 : 0.3 }
        },
        size: { 
          value: { min: 2, max: 5 },
          random: { enable: true, minimumValue: 1 }
        },
        move: { 
          enable: true, 
          speed: { min: 0.2, max: 0.8 }, 
          direction: "none", 
          outModes: { default: "out" },
          random: true,
          straight: false
        },
        shape: { type: "circle" },
        links: { enable: false }
      },
      interactivity: { 
        events: { 
          onHover: { enable: true, mode: "repulse" }, 
          onClick: { enable: true, mode: "push" }, 
          resize: { enable: true } 
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { quantity: 4 }
        }
      }
    } as const;
  }, [themeKey]);

  if (!init) {
    console.log("⏳ tsParticles not yet initialized, rendering null");
    return (
      <div className="bg-anim" aria-hidden>
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: 'var(--foreground)',
          opacity: 0.3,
          fontSize: '12px'
        }}>
          Loading particles...
        </div>
      </div>
    );
  }

  console.log("🎯 Rendering tsParticles with theme:", themeKey, "and", options.particles.number.value, "particles");



  return (
    <div className="bg-anim" aria-hidden>
      <Particles 
        id="bg-particles" 
        options={options} 
      />
    </div>
  );
}


