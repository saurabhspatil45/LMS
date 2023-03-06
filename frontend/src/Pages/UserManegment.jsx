import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { Button } from "@mui/material";
const UserManegment =()=>{
    return(
        
            <Box sx={{ display: 'flex' }}>
            <AdminDashboard/>
            <Box
               component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 10 }}
                          > 
            <Button variant="contained">Create admin user</Button>
           </Box>
            </Box>
        
    )
}

export default UserManegment;