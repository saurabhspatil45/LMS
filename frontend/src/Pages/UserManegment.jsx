import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { UserManegmentNav } from "../Components/UserManegmentNav";


const UserManegment = () => {


    return (

        <Box sx={{ display: 'flex' }}>
            <AdminDashboard />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 7, p: 5 }}
            >
                {/* <UserTable/> */}

                <UserManegmentNav />

            </Box>
        </Box>

    )
}

export default UserManegment;