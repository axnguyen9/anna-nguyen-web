import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const facts=["I make earrings in my free time :)",
    "Favorite artist: Jon Bellion",
    "Really enjoy drawing fashion sketches!",
    "Favorite book: The Way I Used to Be",
    "A tiny bit of French blood :)"]


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        g o
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"fun fact!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {facts[Math.floor(Math.random()*facts.length)]}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
