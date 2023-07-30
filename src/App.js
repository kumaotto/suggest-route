import { Amplify } from 'aws-amplify'
import { MapView, LocationSearch } from '@aws-amplify/ui-react-geo';
import awsconfig from './aws-exports';
import mapboxgl from 'mapbox-gl';
import '@aws-amplify/ui-react-geo/styles.css';
import 'maplibre-gl/dist/maplibre-gl.css'
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css'
import 'maplibre-gl-js-amplify/dist/public/amplify-geocoder.css'

// setting Amplify
Amplify.configure(awsconfig);

function App() {

  return (
    <div>
      <MapView
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
      >
        <LocationSearch />
      </MapView>
    </div>
  );
}

export default App;