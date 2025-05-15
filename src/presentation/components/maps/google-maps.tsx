import React, { useCallback, useRef } from "react";
import {
  GoogleMap as GoogleMapBase,
  Marker,
  Polyline,
  useLoadScript,
} from "@react-google-maps/api";

interface MapGoogleProps {
  height?: string;
  coordinates?: {
    lat?: number;
    lng?: number;
  }[];
  polylineLatLng?: {
    lat: number;
    lng: number;
  }[];
  onMapClick?: (coordinate: { lat: number; lng: number }) => void;
  className?: React.HTMLProps<HTMLElement>["className"];
}

const GoogleMap: React.FC<MapGoogleProps> = ({
  height = "500px",
  coordinates = [],
  polylineLatLng = [],
  onMapClick,
  className = "",
}) => {
  const mapRef = useRef<google.maps.Map | null>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_KEY_MAPS,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;

    if (coordinates.length === 1) {
      map.setCenter({
        lat: coordinates[0].lat!,
        lng: coordinates[0].lng!,
      });
      map.setZoom(14);
    } else if (coordinates.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      coordinates.forEach((coord) =>
        bounds.extend({ lat: coord.lat!, lng: coord.lng! })
      );
      map.fitBounds(bounds);
    }
  }, [coordinates]);

  const handleClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (onMapClick && e.latLng) {
        onMapClick({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        });
      }
    },
    [onMapClick]
  );

  if (loadError) return <div className="text-red-500">Erro ao carregar o mapa</div>;
  if (!isLoaded) return <div>Carregando mapa...</div>;

  return (
    <div className={`w-full relative overflow-hidden ${className}`} style={{ height }}>
      <GoogleMapBase
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={onLoad}
        onClick={handleClick}
        center={{
          lat: coordinates?.[0]?.lat ?? -23.6824124,
          lng: coordinates?.[0]?.lng ?? -46.5952992,
        }}
        zoom={8}
      >
        {coordinates.map((coord, index) => (
          <Marker
            key={index}
            position={{ lat: coord.lat!, lng: coord.lng! }}
            label={{
              text: `${index + 1}`,
              color: "#ffffff",
              fontWeight: "bold",
            }}
            icon={{
              path: window.google.maps.SymbolPath.CIRCLE,
              fillColor: index === 0 ? "#376c83" : "#df8b32",
              fillOpacity: 1,
              strokeColor: "#fff",
              strokeWeight: 2,
              scale: 10,
            }}
          />
        ))}

        {polylineLatLng.length > 1 && (
          <Polyline
            path={polylineLatLng}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 1.0,
              strokeWeight: 2,
              geodesic: true,
            }}
          />
        )}
      </GoogleMapBase>
    </div>
  );
};

export default GoogleMap;
