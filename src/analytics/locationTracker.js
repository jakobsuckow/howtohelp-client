import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useAnalytics from './useAnalytics';

const LocationTracker = () => {
  const { trackPage } = useAnalytics();
  const {
    location: { pathname }
  } = useHistory();

  useEffect(() => {
    setTimeout(() => {
      trackPage({
        path: pathname,
        title: document.title
      });
    }, 300);
  });
  return null;
};

export default LocationTracker;
