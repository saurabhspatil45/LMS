import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AdminDashboard from "../AdminDashboard";
import { LectureCreateDailog } from "./LectureCreateDailog";
import jwt_decode from 'jwt-decode';
import { useState } from "react";


export const TrainerLectureMainPage = () => {
    const [open, setOpen] = useState(false);
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
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 10, width: 1200 }}
                >
                    <Box sx={{ float: "left" }}>
                        <Button variant="contained" onClick={handleClickOpen} >Create Lectures</Button>
                    </Box>
                    <LectureCreateDailog open={open} handleClose={handleClose} owner={owner} />


                </Box>
            </Box>
        </div>
    )
}