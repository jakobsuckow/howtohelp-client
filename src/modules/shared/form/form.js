import React from "react"

const Form = ({ children }) => {
  return (
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </form>
  )
}

export default Form
