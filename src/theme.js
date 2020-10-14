import { createMuiTheme } from "@material-ui/core/styles"
import createSpacing from "@material-ui/core/styles/createSpacing"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"

export const colors = {
  white: `#ffffff`,
}

const spacing = createSpacing()
const breakpoints = createBreakpoints({})
const theme = createMuiTheme({
  palette: {
    common: colors,
  },
  overrides: {
    MuiButton: {
      root: {
        width: "100%",
        paddingTop: spacing(1.5),
        paddingBottom: spacing(1.5),
        fontSize: 16,
        [breakpoints.up("sm")]: {
          fontSize: 18,
        },
        fontWeight: 400,
        lineHeight: 1,
        textTransform: "none",
        letterSpacing: 2,
        textAlign: "center",
      },
    },
    MuiSpeedDialAction: {
      staticTooltipLabel: {
        fontSize: 16,
        whiteSpace: "nowrap",
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
      },
    },
  },
})

export default theme
