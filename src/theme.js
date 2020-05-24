import { createMuiTheme } from "@material-ui/core/styles"

export const colors = {
  BLACK: "#000",
  PURPLE: "#6705fa",
  GREEN: "048543",
}

const theme = createMuiTheme({
  palette: {
    common: colors,
    primary: {
      main: colors.PURPLE,
    },
    green: {
      main: colors.GREEN,
    },
  },
  typography: {
    fontFamily: "Oswald",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 600,
    lineHeight: 1.5,

    h1: {
      fontSize: 39,
      fontWeight: 600,
      lineHeight: "44px",
      color: colors.BLACK,
    },
    h2: {
      fontSize: 33,
      fontWeight: 600,
      lineHeight: "40px",
      color: colors.BLACK,
    },
    h3: {
      fontSize: 27,
      fontWeight: 600,
      lineHeight: "32px",
      color: colors.BLACK,
    },
    h4: {
      fontSize: 23,
      fontWeight: "bold",
      lineHeight: 1.3,
      color: colors.BLACK,
    },
    h5: {
      fontSize: 23,
      fontWeight: "bold",
      lineHeight: 1.3,
      color: colors.BLACK,
    },
    h6: {
      fontSize: 23,
      fontWeight: "bold",
      lineHeight: 1.3,
      color: colors.BLACK,
    },
    body1: {
      color: colors.BLACK,
      fontSize: 12,
      lineHeight: "18px",
    },
  },
  status: {
    danger: "orange",
  },
})

export default theme
