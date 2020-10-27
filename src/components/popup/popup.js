import { Box, Button, Container, Fade, makeStyles, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { GlobalDataContext } from '../../modules/shared/app/globalDataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    zIndex: 10000,
    position: 'absolute'
  },
  popup: {
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      height: '20vh',
      width: `calc(100% - ${theme.spacing(4)}px);`,
      margin: 'auto'
    },
    height: '60vh'
  }
}));

const Popup = () => {
  const { popup, setPopup } = React.useContext(GlobalDataContext);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fade in={popup.open} direction="right" mountOnEnter unmountOnExit>
        <Paper elevation={4} className={classes.popup}>
          <Container>
            <Box mt={2}>
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
    </div>
  );
};

export default Popup;
