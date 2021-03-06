import { Box, Button, Container, makeStyles, Paper, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import TypeForm from '../../../components/typeform/typeform';
import FormStepper from '../../add-help/formStepper';
import { GlobalDataContext } from '../app/globalDataProvider';

const useStyles = makeStyles(() => ({
  paper: {
    zIndex: 10000,
    position: 'absolute',
    height: '100vh',
    width: '100vw'
  }
}));
const Overlay = () => {
  const { modal, setModal } = React.useContext(GlobalDataContext);
  const classes = useStyles();
  return (
    <Slide
      direction="up"
      in={modal.open}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500 }}
    >
      <Paper elevation={4} className={classes.paper}>
        <Container>
          <Box mt={4}>
            <Button
              variant="outlined"
              onClick={() =>
                setModal({
                  open: false
                })
              }
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Box>
          {modal.message === 'providehelp' && <FormStepper />}
          {modal.message === 'gethelp' && <TypeForm url="https://form.typeform.com/to/iZH3YFSt" />}
        </Container>
      </Paper>
    </Slide>
  );
};

export default Overlay;
