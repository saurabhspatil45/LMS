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

export default function CourseSubmitDailog({ openL, handleCloseL, ID, Name, pending, GetCourse }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const SubmitCourse =()=>{
        axios.patch(`http://localhost:8080/course/patch/${ID}`,{
            status:pending
        })
            .then(response => {
        console.log("update successfully.....")

                 return GetCourse()
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
                    {"Are you Sure Want to submit course for approval?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Name}<br></br>
                        Once Clicked will be submitted for approval
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseL}>
                        Disagree
                    </Button>
                    <Button onClick={SubmitCourse} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}