import React, { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { Box, Typography } from "@material-ui/core"

const Detail = ({ match, location }) => {
  const [moreInfo, setMoreInfo] = useState({})
  const getDetail = async () => {
    const res = await axios.get(
      `http://localhost:5000/airtable/requests/${match.params.id}`
    )
    const { data } = res
    setMoreInfo(data)
  }

  useEffect(() => {
    getDetail()
  }, [])
  return (
    <>
      <Box
        display="flex"
        width={500}
        height={120}
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h1">{moreInfo.fields}</Typography>
      </Box>
    </>
  )
}

export default Detail
