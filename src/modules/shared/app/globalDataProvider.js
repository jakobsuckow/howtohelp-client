import React from 'react';

export const GlobalDataContext = React.createContext();
const GlobalDataProvider = (props) => {
  const [popup, setPopup] = React.useState({
    open: false,
    id: ''
  });
  const [modal, setModal] = React.useState({
    open: false,
    content: ''
  });
  const { children } = props;
  return (
    <GlobalDataContext.Provider
      value={{
        modal,
        setModal,
        popup,
        setPopup
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
