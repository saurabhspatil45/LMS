import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import Button from '@mui/material/Button';
import { AdminDialog } from "../Components/AdminDialog";

export const Course = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
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
                    sx={{ bgcolor: 'background.default', border: "2px solid red", mt: 10, width: 1200 }}
                >
                    <Box sx={{ float: "left" }}>
                        <Button variant="contained" onClick={handleClickOpen}>Create Course</Button>

                        <AdminDialog open={open} handleClose={handleClose} />
                    </Box>

                </Box>
            </Box>
        </div>
    )
}