import React from "react"

const DogWalkingIcon = (props) => {
  const { checked } = props

  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill={checked ? `#05065C` : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.34375 1L14.6719 10.6001"
        stroke={checked ? `#05065C` : "#ccc"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6719 10.5999L17.7969 7.79986V3.79983L20.1406 6.19985L24.6656 8.05328C25.4239 8.3639 25.825 9.19729 25.5946 9.98373L24.8281 12.5999H22.0938L19.75 14.9999M14.6719 10.5999H3.96395C3.31756 10.5999 2.6985 10.3391 2.24689 9.87669L1 8.59987L2.17188 12.9999L3.28108 16.4074C3.56569 17.2817 3.41236 18.2396 2.86905 18.9814V18.9814C1.92658 20.2682 1.5645 21.8902 1.87024 23.4556L2.17188 25H3.73438L4.11243 23.0644C4.37673 21.7111 4.98632 20.4491 5.88204 19.4009L6.77098 18.3605C7.07496 18.0048 7.51945 17.7999 7.98738 17.7999H14.7258C15.3973 17.7999 15.9973 18.2192 16.2282 18.8497L16.5277 19.6677C16.8505 20.549 17.0156 21.4802 17.0156 22.4187V25H18.9688L19.75 14.9999M14.6719 10.5999L19.75 14.9999"
        stroke={checked ? `#05065C` : "#ccc"}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DogWalkingIcon