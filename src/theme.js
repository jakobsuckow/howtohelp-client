import { createMuiTheme } from '@material-ui/core/styles';
import createSpacing from '@material-ui/core/styles/createSpacing';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

export const colors = {
  neutralsWhite: `#ffffff`,
  neutralsBlack: `#000000`,
  primaryMain: '#05065C',
  primaryLight: '#412e8a',
  primaryDark: '#000033',
  secondaryMain: '#E61F48',
  secondaryLight: '#ff6073',
  seconaryDark: '#ac0021',
  neutralsGrey: '#E1E1E1',
  neutralsDarkGrey: '#B2B2B2'
};

const breakpoints = createBreakpoints({});

const spacing = createSpacing();

const theme = createMuiTheme({
  palette: {
    common: colors,
    primary: {
      light: colors.primaryLight,
      main: colors.primaryMain,
      dark: colors.primaryDark,
      contrastText: colors.neutralsWhite
    },
    secondary: {
      light: colors.secondaryLight,
      main: colors.secondaryMain,
      dark: colors.seconaryDark,
      contrastText: colors.neutralsWhite
    },
    unChecked: {
      main: colors.neutralsDarkGrey
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'DM Serif Display',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 900,
    lineHeight: 1.5,
    h1: {
      fontFamily: 'DM Serif Display',
      fontSize: 39,
      fontWeight: 'normal',
      lineHeight: '44px',
      color: colors.primaryDark,
      [breakpoints.up('sm')]: {
        fontSize: 48,
        fontWeight: 'normal',
        lineHeight: '58px'
      }
    },
    h2: {
      fontFamily: 'DM Serif Display',
      fontSize: 33,
      fontWeight: 'normal',
      lineHeight: '40px',
      color: colors.primaryDark,
      [breakpoints.up('sm')]: {
        fontSize: 39,
        fontWeight: 'normal',
        lineHeight: '48px'
      }
    },
    h3: {
      fontFamily: 'DM Serif Display',
      fontSize: 27,
      fontWeight: 'normal',
      lineHeight: '32px',
      color: colors.primaryDark,
      [breakpoints.up('sm')]: {
        fontSize: 31,
        fontWeight: 'normal',
        lineHeight: '40px'
      }
    },
    h4: {
      fontFamily: 'DM Serif Display',
      fontSize: 23,
      fontWeight: 'normal',
      lineHeight: '30px',
      color: colors.primaryDark,
      [breakpoints.up('sm')]: {
        fontSize: 25,
        fontWeight: 'normal',
        lineHeight: '32px'
      }
    },
    body1: {
      fontFamily: 'Red Hat Display',
      color: colors.primaryDark,
      fontSize: 14,
      lineHeight: '22px',
      [breakpoints.up('sm')]: {
        fontSize: 16,
        lineHeight: '24px'
      }
    },
    body2: {
      fontFamily: 'Red Hat Display',
      color: colors.primaryDark,
      fontSize: 12,
      lineHeight: '16px',
      [breakpoints.up('sm')]: {
        fontSize: 14,
        lineHeight: '22px'
      }
    }
  },
  overrides: {
    MuiButton: {
      root: {
        lineHeight: 1,
        textTransform: 'none',
        paddingTop: spacing(1),
        paddingBottom: spacing(1),
        marginLeft: spacing(1),
        fontSize: 16,
        [breakpoints.up('sm')]: {
          fontSize: 18
        }
      },
      outlined: {
        backgroundColor: colors.neutralsGrey,
        border: 'none'
      },
      contained: {
        backgroundColor: ''
      }
    },
    MuiFab: {
      primary: {
        backgroundColor: colors.primaryMain
      }
    },
    MuiSpeedDialAction: {
      staticTooltipLabel: {
        fontSize: 16,
        whiteSpace: 'nowrap',
        color: colors.primaryDark,
        backgroundColor: colors.neutralsWhite,
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)'
      }
    },
    MuiPaper: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiFormControlLabel: {
      label: {}
    },
    MuiAlert: {
      root: {
        borderRadius: spacing(4)
      },
      message: {
        color: colors.white
      }
    },
    MuiSnackbar: {
      root: {
        zIndex: 100000
      },
      anchorOriginTopCenter: {
        [breakpoints.up('xs')]: {
          top: 48,
          left: '50%',
          right: 'auto',
          transform: 'translateX(-50%)'
        },
        [breakpoints.up('md')]: {
          top: 24,
          left: '50%',
          right: 'auto',
          transform: 'translateX(-50%)'
        }
      }
    },
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%'
        },
        body: {
          height: '100%',
          fontSize: 16,
          backgroundColor: colors.white
        },
        '#root': {
          height: '100%'
        },
        '.App': {
          width: '100%',
          height: '100%'
        }
      }
    }
  }
});

export default theme;
