import { PropsWithChildren } from 'react';
import ReactMapGL from 'react-map-gl';

type AppMapProps = PropsWithChildren & {
  center: { longitude: number; latitude: number };
};

const Map = ({ children, center }: AppMapProps) => (
  <ReactMapGL
    mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    style={{ width: '100%', height: '100%' }}
    initialViewState={{
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 14,
    }}
  >
    {children}
  </ReactMapGL>
);

export default Map;
