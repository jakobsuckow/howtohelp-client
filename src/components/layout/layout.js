import React from "react"
import { Helmet } from "react-helmet"
const Layout = (props) => {
  const { children, title } = props
  return (
    <div>
      {title && (
        <Helmet>
          <title>
            {title} | {process.env.REACT_APP_NAME}
          </title>
        </Helmet>
      )}
      <main>{children}</main>
    </div>
  )
}

export default Layout
