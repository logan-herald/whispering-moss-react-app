import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
// ... import API call utility

const GlobePage: React.FC = () => {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapDiv.current) return;

    const map = new Map({ basemap: "satellite" });
    const view = new MapView({
      container: mapDiv.current,
      map: map,
      viewingMode: "global",
      center: [0, 20],
      zoom: 2,
    });

    view.on("click", async (event) => {
      const lat = event.mapPoint.latitude;
      const lng = event.mapPoint.longitude;
      console.log("ping", lat, lng);
      // Fetch plant species from backend
      //const plants = await fetchPlants(lat, lng);
      // Display plants (e.g., popup or sidebar)
      // ...
    });

    return () => view.destroy();
  }, []);

  return <div ref={mapDiv} style={{ width: "100vw", height: "100vh" }} />;
};

export default GlobePage;