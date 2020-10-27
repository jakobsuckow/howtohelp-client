import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { GlobalDataContext } from '../../modules/shared/app/globalDataProvider';

const useStyles = makeStyles((theme) => ({}));

const Popup = (props) => {
  const {} = props;
  const { popup, setPopup } = React.useContext(GlobalDataContext);

  return <Typography>Popup</Typography>;
};

export default Popup;
