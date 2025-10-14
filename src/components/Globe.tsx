import { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/SceneView";
import WebMap from "@arcgis/core/WebMap";

export default function Globe() {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        basemap: "oceans",
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [0, 20],
        zoom: 2,
      });

      view.on("click", (event) => {
        view.hitTest(event).then((response) => {
            console.log("ping")
          //const country = response?.results?.[0]?.graphic?.attributes?.COUNTRY;
          if (true) {
            console.log("Selected country:", "country");
            // Trigger species lookup here
          }
        });
      });
    }
  }, []);

  return <div className="w-full h-[80vh]" ref={mapDiv}></div>;
}
