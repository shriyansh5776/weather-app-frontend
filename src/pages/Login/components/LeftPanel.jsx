import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const LeftPanel = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.18;

    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = false;

    globeRef.current.pointOfView(
      {
        lat: 20,
        lng: 78,
        altitude: 2.05,
      },
      0
    );
  }, []);

  return (
    <main className="relative flex h-screen flex-col overflow-hidden bg-black">

      {/* Logo */}
      <header className="absolute left-12 top-12 z-10">
        <h1 className="text-4xl font-bold text-white">Atlas</h1>

        <p className="mt-1 text-sm text-gray-400">
          "weather, anywhere you point"
        </p>
      </header>

      {/* Globe */}
      <section className="flex flex-1 items-center justify-center">
        <Globe
          ref={globeRef}
          width={700}
          height={700}
          backgroundColor="rgba(0,0,0,0)"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#3b82f6"
          atmosphereAltitude={0.22}
          showAtmosphere
        />
      </section>

      {/* Footer */}
      <footer className="absolute bottom-10 left-12 text-gray-500 text-sm">
        Edit
      </footer>
    </main>
  );
};

export default LeftPanel;