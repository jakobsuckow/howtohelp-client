import { useCallback } from 'react';

// export const isAnalyticsUsagePermitted = () => {
//   const pallywayCookie = Cookies.get(Cookie.PallywayCookie);
//   const pallywayCookieParsed = pallywayCookie && JSON.parse(pallywayCookie);
//   return pallywayCookieParsed && pallywayCookieParsed.analytical;
// };

// const isTrackingAvailable = () => {
//   return isAnalyticsUsagePermitted() && window.analytics;
// };

const useAnalytics = () => {
  const trackEvent = useCallback((eventName, data) => {
    window.analytics.track(eventName, data);
  }, []);

  const trackPage = useCallback((data) => {
    window.analytics.page(data);
  }, []);

  return {
    trackEvent,
    trackPage
  };
};

export default useAnalytics;
