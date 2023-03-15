import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { Button } from "@mui/material";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "../Css/Table.css";
// import IconButton from '@mui/material/IconButton';
// import Edit from "@mui/icons-material/Edit";
// import DeleteIcon from '@mui/icons-material/Delete';
// import TextField from '@mui/material/TextField';
// import { UserTable } from "./UserTable";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

const UserManegment = () => {



    return (

        <Box sx={{ display: 'flex' }}>
            <AdminDashboard />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 10, p: 5, border: "1px solid red" }}
            >
                {/* <UserTable/> */}
                <Button variant="contained">View All User</Button>
                <Button variant="contained">View All Trainers</Button>

                <Box sx={{ border: "1px solid red", width:300,height:300,margin:"auto" }}>
                <FormControl fullWidth>
                    <TextField id="standard-basic" label="Standard" variant="standard" sx={{width:300}} />
                    <TextField id="standard-basic" label="Standard" variant="standard" sx={{width:300}} />
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                         value="Age"
                        label="Age"
                    //   onChange={handleChange}
                    sx={{mt:5}}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                </Box>
            </Box>
        </Box>

    )
}

export default UserManegment;