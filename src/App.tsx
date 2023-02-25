import {
  AttributionControl,
  Map,
  Marker,
  NavigationControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { EmojiMarker } from "./components/EmojiMarker";
import { points } from "./points";

const FullMapLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Map
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
        mapLib={maplibregl}
        mapStyle="https://tile.openstreetmap.jp/styles/osm-bright/style.json"
        initialViewState={{
          latitude: 35.713728,
          longitude: 139.776605,
          zoom: 15,
        }}
        hash={true}
        maxZoom={22}
        maxPitch={85}
        attributionControl={false}
      >
        {points.map((poi) => {
          return <EmojiMarker {...poi} />;
        })}
        <AttributionControl customAttribution="Original Emoji by <a href='https://misskey.io/'>Misskey.io</a>" />
        <NavigationControl
          position="bottom-right"
          visualizePitch={true}
          showZoom={true}
          showCompass={true}
        />
      </Map>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FullMapLayout />
    </div>
  );
}

export default App;
