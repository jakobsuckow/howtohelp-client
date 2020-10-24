import React from "react"
import axios from "axios"
import { AlertContext } from "../../../components/alert/alertProvider"

const apiURI = `http://localhost:5000/api/v1`

const Api = {
  getPins: () => {
    return axios(`${apiURI}/pin/all`, {
      method: "GET",
    })
  },
  getPinsByDisplay: ({ latitude, longitude, latitudeEnd, longitudeEnd }) => {
    return axios(`${apiURI}/pin/all`, {
      method: "GET",
      params: { latitude, longitude, latitudeEnd, longitudeEnd },
    })
  },
  getPinsByCenter: ({ latitude, longitude }) => {
    return axios(`${apiURI}/pin/all`, {
      method: "GET",
      params: {
        latitude,
        longitude,
      },
    })
  },
  postPin: ({ latitude, longitude }) => {
    return axios(`${apiURI}/pin`, {
      method: "POST",
      data: {
        latitude,
        longitude,
      },
    })
  },
}

export default (name) => {
  const { showAlert } = React.useContext(AlertContext)
  const apiMethod = React.useCallback(
    (params) => {
      return Api[name](params).then((res) => {
        console.log(params)
        if (res.status === 500) {
          showAlert({ message: "Error in useApi" })
          console.log(res)
        }
        return res
      })
    },
    [name]
  )
  return [apiMethod]
}
