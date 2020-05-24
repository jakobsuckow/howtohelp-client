import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"
import useApi from "../hook/useApi"
import Auth from "../../../services/Auth"

export const AuthContext = React.createContext()

const AuthProvider = (props) => {
  const { children } = props

  const [authUser, setAuthUser] = useState(null)

  const [getAuthUser, status] = useApi("getAuthUser")

  useEffect(() => {
    setAuthUser(null)
    getAuthUser()
      .then((res) => {
        const { data } = res
        setAuthUser(data)
      })
      .catch(() => {
        Auth.removeAuthFromStorage()
      })
  }, [getAuthUser])

  if (status.value === "rejected") {
    return <Redirect to="/login" />
  }

  if (status.value === "idle" || status.value === "pending") {
    return <p>Loading...</p>
  }

  return (
    <AuthContext.Provider value={{ authUser }}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node,
}

AuthProvider.defaultProps = {
  children: null,
}

export default AuthProvider
