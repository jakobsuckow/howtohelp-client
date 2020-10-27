import { Box, Button, Container, Fade, makeStyles, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { GlobalDataContext } from '../../modules/shared/app/globalDataProvider';

const useStyles = makeStyles((theme) => ({
  popup: {
    zIndex: 10000,
    position: 'absolute',
    width: '300px',
    height: '60vh'
  }
}));

const Popup = () => {
  const { popup, setPopup } = React.useContext(GlobalDataContext);
  const classes = useStyles();
  return (
    <Fade in={popup.open} direction="right" mountOnEnter unmountOnExit>
      <Paper elevation={4} className={classes.popup}>
        <Container>
          <Box mt={1}>
            <Button
              variant="outlined"
              onClick={() => setPopup({ open: false })}
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Box>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </Container>
      </Paper>
    </Fade>
  );
};

export default Popup;
