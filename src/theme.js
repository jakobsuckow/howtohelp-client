import { createMuiTheme } from "@material-ui/core/styles"
import createSpacing from "@material-ui/core/styles/createSpacing"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"

export const colors = {
  white: `#ffffff`,
  primaryDarkBlue: "#05065C",
  primaryDark: "#000",
  primaryGrey: "#E1E1E1",
  secondaryGrey: "B2B2B2",
}

const breakpoints = createBreakpoints({})
const spacing = createSpacing()
const theme = createMuiTheme({
  palette: {
    common: colors,
    primary: {
      main: colors.primaryDarkBlue,
    },
    unChecked: {
      main: colors.secondaryGrey,
    },
  },
  typography: {
    fontFamily: "DM Sans",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 900,
    lineHeight: 1.5,
    h1: {
      fontFamily: "DM Serif Display",
      fontSize: 39,
      fontWeight: "normal",
      lineHeight: "44px",
      color: colors.primaryDark,
      [breakpoints.up("sm")]: {
        fontSize: 48,
        fontWeight: "normal",
        lineHeight: "58px",
      },
    },
    h2: {
      fontFamily: "DM Serif Display",
      fontSize: 33,
      fontWeight: "normal",
      lineHeight: "40px",
      color: colors.primaryDark,
      [breakpoints.up("sm")]: {
        fontSize: 39,
        fontWeight: "normal",
        lineHeight: "48px",
      },
    },
    h3: {
      fontFamily: "DM Serif Display",
      fontSize: 27,
      fontWeight: "normal",
      lineHeight: "32px",
      color: colors.primaryDark,
      [breakpoints.up("sm")]: {
        fontSize: 31,
        fontWeight: "normal",
        lineHeight: "40px",
      },
    },
    h4: {
      fontFamily: "DM Serif Display",
      fontSize: 23,
      fontWeight: "normal",
      lineHeight: "30px",
      color: colors.primaryDark,
      [breakpoints.up("sm")]: {
        fontSize: 25,
        fontWeight: "normal",
        lineHeight: "32px",
      },
    },
    body1: {
      fontFamily: "Red Hat Display",
      color: colors.primaryDark,
      fontSize: 14,
      lineHeight: "22px",
      [breakpoints.up("sm")]: {
        fontSize: 16,
        lineHeight: "24px",
      },
    },
    body2: {
      fontFamily: "Red Hat Display",
      color: colors.primaryDark,
      fontSize: 12,
      lineHeight: "16px",
      [breakpoints.up("sm")]: {
        fontSize: 14,
        lineHeight: "22px",
      },
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        paddingTop: spacing(1.5),
        paddingBottom: spacing(1.5),
        fontSize: 16,
        [breakpoints.up("sm")]: {
          fontSize: 18,
        },
      },
      outlined: {
        backgroundColor: colors.primaryGrey,
        border: "none",
      },
    },
    MuiFab: {
      primary: {
        backgroundColor: colors.primaryDarkBlue,
      },
    },
    MuiSpeedDialAction: {
      staticTooltipLabel: {
        fontSize: 16,
        whiteSpace: "nowrap",
        color: colors.primaryDark,
        backgroundColor: colors.white,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    MuiFormControlLabel: {
      label: {},
    },
    MuiSnackbar: {
      root: {
        zIndex: 100000,
      },
      anchorOriginTopCenter: {
        [breakpoints.up("xs")]: {
          top: 80,
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
        },
        [breakpoints.up("md")]: {
          top: 24,
          left: "50%",
          right: "auto",
          transform: "translateX(-50%)",
        },
      },
    },
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          fontSize: 16,
          backgroundColor: colors.white,
        },
        "#root": {
          height: "100%",
        },
        ".App": {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
})

export default theme

// .mapboxgl-popup {
//   font-family: "Baloo Thambi 2", cursive;
//   font-size: 10px;
//   padding: 0;
//   margin: 0;
//   color: #424242;
// }

// .mapboxgl-popup-content {
//   padding: 1rem;
//   margin: 0;

//   > * {
//     margin: 0 0 0.5rem;
//     padding: 0;

//     &:last-child {
//       margin-bottom: 0;
//     }
//   }

//   p {
//     border-bottom: 1px solid rgba(black, 0.2);

//     b {
//       font-size: 1.6rem;
//       color: #212121;
//       padding: 0 5px;
//     }
//   }

//   img {
//     display: block;
//     width: 3rem;
//     height: 3rem;
//   }
// }
