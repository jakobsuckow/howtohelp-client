import { makeStyles } from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  path: ({ checked }) => ({
    stroke: checked ? theme.palette.primary : "#ccc",
  }),
}))

const DeliveryIcon = (props) => {
  const classes = useStyles(props)
  const { checked } = props
  return (
    <svg
      width="37"
      height="21"
      viewBox="0 0 37 21"
      fill={checked ? `#05065C` : "none"}
      className={classes.path}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0526 17.8182H9.36841C8.81612 17.8182 8.36841 17.3705 8.36841 16.8182V2C8.36841 1.44772 8.81612 1 9.36841 1H25.3289C25.8812 1 26.3289 1.44772 26.3289 2V16.8182C26.3289 17.3705 25.8812 17.8182 25.3289 17.8182H16.1974"
        className={classes.path}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M33.6974 17.8182H36V10.1818C36 6.86812 33.3137 4.18182 30 4.18182H26.329"
        className={classes.path}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M29.0921 17.8182L24.9474 17.8182"
        className={classes.path}
        strokeWidth="1.4"
      />
      <path
        d="M5.60526 5.54544L1 5.54544"
        className={classes.path}
        strokeWidth="1.4"
        strokeLineCap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.60523 9.18182L1.92102 9.18182"
        className={classes.path}
        strokeWidth="1.4"
        strokeLineCap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.6052 12.8182H2.84204"
        className={classes.path}
        strokeWidth="1.4"
        strokeLineCap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9579 18.2727C15.9579 19.3837 15.0429 20.3 13.8947 20.3C12.7466 20.3 11.8316 19.3837 11.8316 18.2727C11.8316 17.1617 12.7466 16.2454 13.8947 16.2454C15.0429 16.2454 15.9579 17.1617 15.9579 18.2727Z"
        className={classes.path}
        strokeWidth="1.4"
      />
      <path
        d="M33.4579 18.2727C33.4579 19.3837 32.5429 20.3 31.3947 20.3C30.2466 20.3 29.3316 19.3837 29.3316 18.2727C29.3316 17.1617 30.2466 16.2454 31.3947 16.2454C32.5429 16.2454 33.4579 17.1617 33.4579 18.2727Z"
        className={classes.path}
        strokeWidth="1.4"
      />
    </svg>
  )
}

export default DeliveryIcon
