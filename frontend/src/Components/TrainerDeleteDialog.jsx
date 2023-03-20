import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from "axios";

export default function TrainerDeleteDialog({ open, handleClose, deleteID, Name ,GetTrainers}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDelete = () => {

    // setIsLoading(true);
    axios.delete(`http://localhost:8080/trainer/delete/${deleteID}`)
        .then(response => {
             return GetTrainers()
        })
        .catch(error => {
            console.error(error);
        });

    handleClose()
}

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you Sure Want to Delete Trainer?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Name}<br></br>
            Once deleted will be removed permenently from the data base
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}