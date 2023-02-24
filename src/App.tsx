import { Map, Marker, NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { EmojiMarker } from "./components/EmojiMarker";
import { points } from "./points";

function App() {
  return (
    <div className="App">
      <Map
        style={{
          display: "block",
          width: "100vw",
          height: "100vh",
        }}
        mapLib={maplibregl}
        mapStyle="https://tile.openstreetmap.jp/styles/osm-bright/style.json"
        attributionControl={true}
        initialViewState={{
          latitude: 35.713728,
          longitude: 139.776605,
          zoom: 15,
        }}
        hash={true}
        maxZoom={22}
        maxPitch={85}
      >
        {points.map((poi) => {
          return <EmojiMarker {...poi} />;
        })}
        <NavigationControl
          position="bottom-right"
          visualizePitch={true}
          showZoom={true}
          showCompass={true}
        />
      </Map>
    </div>
  );
}

export default App;
