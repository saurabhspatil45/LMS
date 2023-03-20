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

export default function TrainerLiveDialog({ openL, handleCloseL, deleteID, Name, GetTrainers,isActive }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const MakeActive =()=>{
    axios.patch(`http://localhost:8080/trainer/patch/${deleteID}`,{
        isActive:isActive
    })
        .then(response => {
             return GetTrainers()
        })
        .catch(error => {
            console.error(error);
        });

    handleCloseL()
}

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={openL}
                onClose={handleCloseL}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Are you Sure Want to Make Trainer Visible to Users?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Name}<br></br>
                        Once Clicked trainer will be active on user side
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseL}>
                        Disagree
                    </Button>
                    <Button onClick={MakeActive} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}