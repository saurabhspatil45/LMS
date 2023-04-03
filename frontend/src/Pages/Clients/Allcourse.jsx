import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../../Components/UserDashboard";
import { CourseDetailsClient } from "./CourseDetailsClient";
const Allcourse = () => {
   

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />
                <Box sx={{mt: 12, width: 1250, display:"grid",gridTemplateColumns:"repeat(3,1fr)" }}>

               <CourseDetailsClient/>

                </Box>
            </Box>

        </div>
    )
}


export default Allcourse