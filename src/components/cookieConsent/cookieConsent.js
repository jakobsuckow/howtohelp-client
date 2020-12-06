import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import { useCookie } from 'react-use';
import { enableSegmentAnalytics } from '../../analytics/segmentScript';
import useAnalytics from '../../analytics/useAnalytics';
import { AnalyticsEvent } from '../../analytics/analyticsEvent';

const Cookie = {
  HowtohelpCookie: 'HowtohelpCookie'
};

const CookieConsent = () => {
  const { trackEvent } = useAnalytics();
  const [cookies, setCookies] = useCookie(Cookie.HowtohelpCookie);
  const [isOpen, setIsOpen] = React.useState(false);

  const cookieOptions = React.useMemo(() => {
    if (cookies) {
      return JSON.parse(cookies);
    }

    return undefined;
  }, [cookies]);

  React.useEffect(() => {
    if (cookieOptions === undefined) {
      setIsOpen(true);
    }
  }, [cookieOptions]);

  const handleSubmit = React.useCallback(() => {
    setIsOpen(false);
    const newOptions = {
      essential: true,
      functional: true,
      analytical: true
    };

    setCookies(JSON.stringify(newOptions), {
      path: '/'
    });

    enableSegmentAnalytics();
    trackEvent(AnalyticsEvent.UserAgreesToCookies, newOptions);
  }, [setCookies, trackEvent]);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      message="This is the Cookie Consent"
      open={isOpen}
      action={
        <Button color="secondary" size="small" onClick={handleSubmit}>
          I Agree!
        </Button>
      }
    />
  );
};

export default CookieConsent;
