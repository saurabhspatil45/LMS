import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "../AdminDashboard";
import Button from '@mui/material/Button';
import { AdminDialog } from "./AdminDialog";
import jwt_decode from 'jwt-decode';
import { useState } from "react";

export const Course = () => {
    const [open, setOpen] = React.useState(false);
    const [owner, setowner] = useState("")

    const handleClickOpen = () => {
        const tok = localStorage.getItem('LMS_Admin_Token');
        const decodedToken = jwt_decode(tok);
        const user = decodedToken.userName;
        setowner(user)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ bgcolor: 'background.default', mt: 10, width: 1200 }}
                >
                    <Box sx={{ float: "left" }}>
                        <Button variant="contained" onClick={handleClickOpen}>Create Course</Button>

                        
                    </Box>
                    <AdminDialog open={open} handleClose={handleClose} owner={owner} />
                </Box>
            </Box>
        </div>
    )
}