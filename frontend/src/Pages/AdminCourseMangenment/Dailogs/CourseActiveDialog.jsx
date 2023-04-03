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

export default function CourseActiveDialog({ openL, handleCloseL, ID, Name, isActive, GetCourse,message }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const FinalApproval =()=>{
        axios.patch(`https://fair-blue-capybara-vest.cyclic.app/course/patch/${ID}`,{
            isActive:isActive
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
                  {message}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {Name}<br></br>
                        Once Clicked User Will Get A New Course
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseL}>
                        Disagree
                    </Button>
                    <Button onClick={FinalApproval} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}