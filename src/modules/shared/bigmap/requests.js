import React, { useState, useEffect } from "react"
import axios from "axios"
import { Pin } from "../marker/pin"

const Requests = () => {
  const [requests, setRequests] = useState([])

  const getRequests = async () => {
    const res = await axios.get("http://localhost:5000/airtable/requests")
    const { data } = res
    setRequests(data)
  }

  useEffect(() => {
    getRequests()
  }, [])

  return requests.map((request, i) => <Pin key={i} {...request} />)
}

export default Requests
