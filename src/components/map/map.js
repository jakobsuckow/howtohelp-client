import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import { makeStyles } from '@material-ui/core/styles';
import 'mapbox-gl/dist/mapbox-gl.css';
import Popup from '../popup/popup';
import useApi from '../../modules/shared/app/useApi';
import { AlertContext } from '../alert/alertProvider';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFrb2JzdWNrb3ciLCJhIjoiY2s4M2pmeHo3MGI5bzNtbzVma2w3YTdkOCJ9.SoffMUvqxv6PTh5TYq20kA';

const useStyles = makeStyles(() => ({
  loader: {
    position: 'absolute'
  },
  mapContainer: {
    width: `100%`,
    height: `100%`
  },
  mapBox: {
    width: `100%`,
    height: `100%`
  }
}));

const Map = (props) => {
  const { center } = props;
  const classes = useStyles();
  const mapboxElRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  const [getPinsByDisplayApi] = useApi('getPinsByDisplay');
  const [postPinApi] = useApi('postPin');

  const { showAlert } = React.useContext(AlertContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapboxElRef.current,
      style: 'mapbox://styles/sueck94/ckgc1uk8d0cb31ap3fkfw1zzm',
      center: center,
      zoom: 12
    });

    const addToLayer = (name, data) => {
      return map.getSource(name).setData({
        type: 'FeatureCollection',
        features: data
      });
    };

    const [[longitude, latitude], [longitudeEnd, latitudeEnd]] = map.getBounds().toArray();
    map.once(`load`, async () => {
      map.addSource('random-points-data', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });
      map.addLayer({
        id: 'random-points-layer',
        source: 'random-points-data',
        type: 'symbol',
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          'icon-image': 'bakery-15',
          'icon-padding': 0,
          'icon-allow-overlap': true
        }
      });
      getPinsByDisplayApi({
        latitude,
        longitude,
        latitudeEnd,
        longitudeEnd
      }).then((res) => {
        addToLayer('random-points-data', res.data);
      });
    });

    map.on('moveend', async () => {
      const [[longitude, latitude], [longitudeEnd, latitudeEnd]] = map.getBounds().toArray();
      setTimeout(() => {
        getPinsByDisplayApi({
          latitude,
          longitude,
          latitudeEnd,
          longitudeEnd
        }).then((res) => {
          addToLayer('random-points-data', res.data);
        });
      }, [500]);
    });

    map.on('click', (e) => {
      const [longitude, latitude] = e.lngLat.toArray();
      postPinApi({ latitude, longitude }).then(() => {
        showAlert({
          message: 'New Pin created'
        });
      });
    });

    map.on('click', 'random-points-layer', (e) => {
      if (e.features.length) {
        const feature = e.features[0];
        const popupNode = document.createElement('div');
        ReactDOM.render(<Popup feature={feature} />, popupNode);
        popUpRef.current
          .setLngLat(feature.geometry.coordinates)
          .setDOMContent(popupNode)
          .addTo(map);
      }
    });
    return () => map.remove();
  }, [center, showAlert, getPinsByDisplayApi, postPinApi]);

  return (
    <div className="App">
      <div className={classes.mapContainer}>
        <div className={classes.mapBox} ref={mapboxElRef} />
      </div>
    </div>
  );
};

export default Map;
