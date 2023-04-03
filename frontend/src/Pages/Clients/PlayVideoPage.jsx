import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../../Components/UserDashboard";
import { PlayVideo } from "./PlayVideo";
// import { Button } from "@mui/material";

const PlayVideoPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />
                <PlayVideo />

            </Box>

        </div>
    )
}


export default PlayVideoPage