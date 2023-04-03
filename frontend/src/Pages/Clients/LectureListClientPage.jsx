import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../../Components/UserDashboard";
import { LectureListClientDetails } from "./LectureListClientDetails";
const LectureListClientPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />

                <LectureListClientDetails />

            </Box>

        </div>
    )
}


export default LectureListClientPage