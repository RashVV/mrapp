import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Увійти
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Реєстрація</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для реєстрації введіть свій емейл та нажміть кнопку Зареєструватися.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відміна</Button>
          <Button onClick={handleClose}>Зареєструватись</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}