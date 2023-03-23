import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../Components/UserDashboard";
import { TrainerFullInfoCilent } from "./TrainerFullInfoCilent";


export const TrainerInfoPage = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />  
                
                <TrainerFullInfoCilent/>
            </Box>
        </div>
    )
}