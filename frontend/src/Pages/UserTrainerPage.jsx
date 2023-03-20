import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../Components/UserDashboard";
import UserTarinerDetails from "./UserTarinerDetails";

const UserTrainerPage = () => {

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />
                {/* <Box sx={{ mt: 12, width: 1250, display: "grid", gridTemplateColumns: "repeat(3,1fr)",border:"2px solid red" }}> */}
                    <UserTarinerDetails />

                {/* </Box> */}
            </Box>

        </div>
    )
}


export default UserTrainerPage