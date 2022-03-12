import { Circle, MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Kyoto Station
const [LAT, LNG] = [34.98587031831171, 135.7587243985111];

const DistanceMap = ({ dist_km }: { dist_km: number }) => {
  const zoom = 14 - Math.round(Math.log2(dist_km))

  return (
    <>
      <MapContainer
        center={[LAT, LNG]}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full bg-base-100 rounded-md shadow-md h-96 lg:h-120"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[LAT, LNG]} radius={dist_km * 1000} />
      </MapContainer>
    </>
  );
};

export default DistanceMap;