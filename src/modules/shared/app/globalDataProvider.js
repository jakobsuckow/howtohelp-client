import React from "react"

export const GlobalDataContext = React.createContext()
const GlobalDataProvider = (props) => {
  const [modal, setModal] = React.useState({
    open: false,
    content: "",
  })
  const { children } = props
  return (
    <GlobalDataContext.Provider
      value={{
        modal,
        setModal,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  )
}

export default GlobalDataProvider
