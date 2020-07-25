import { fetch } from "whatwg-fetch"
import Auth from "../../../services/Auth"

const getAccessToken = () => Auth.getFromStorage("accessToken")
const getRefreshToken = () => Auth.getFromStorage("refreshToken")
const apiURI = ``

const Api = {
  updateAuthUser: (body) => {
    return fetch(`${apiURI}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify(body),
    })
  },
  refreshUser: () => {
    return fetch(`${apiURI}/user/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        refreshToken: getRefreshToken(),
      }),
    })
  },
  login: ({ email, password }) => {
    return fetch(`${apiURI}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
  },
  registration: ({
    firstName,
    lastName,
    telephone,
    streetName,
    streetNumber,
    postalCode,
    city,
    country,
  }) => {
    return fetch(`${apiURI}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        telephone,
        streetName,
        streetNumber,
        postalCode,
        city,
        country,
      }),
    })
  },
}

export default Api
