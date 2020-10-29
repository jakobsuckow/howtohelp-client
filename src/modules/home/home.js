import React from 'react';
import Map from '../../components/map/map';
import SpeedDials from '../../components/button/speedDials';
import Overlay from '../../modules/shared/overlay/overlay';
import GlobalDataProvider from '../shared/app/globalDataProvider';
import { Helmet } from 'react-helmet';
import Popup from '../../components/popup/popup';

const Home = () => {
  const [center] = React.useState([13.404954, 52.520008]);

  return (
    <>
      <Helmet>
        <title>How to help | Home</title>
      </Helmet>
      <GlobalDataProvider>
        <Popup />
        <Overlay />
        <SpeedDials />
        <Map center={center} />
      </GlobalDataProvider>
    </>
  );
};

export default Home;
