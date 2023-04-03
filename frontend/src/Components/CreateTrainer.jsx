import React from "react"
import { Box } from "@mui/system";
import AdminDashboard from "../Pages/AdminDashboard";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { UserManegmentNav } from "../Components/UserManegmentNav";
import { useState } from 'react';
import axios from "axios";

export const CreateTrainer = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {

        const payload = {
            email,
            password,
        }
        try {
            // const response = await axios.post('http://localhost:8080/trainer/signup', payload);
            const response = await axios.post('https://fair-blue-capybara-vest.cyclic.app/trainer/signup', payload);
            alert("User created sussecfully")
            console.log(response.data)
        } catch (error) {
            alert("something went wrong")
            console.error(error);
        }


    };
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <UserManegmentNav />
                    <Box sx={{ border: "2px solid blue", width: 400, height: 350, margin: "auto", mt: 5, p: 5, borderRadius: 5 }}>
                        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} sx={{ width: 300 }} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} sx={{ width: 300, mt: 4 }} />
                        <FormControl sx={{ mt: 4, width: 280 }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
                                Role
                            </InputLabel>
                            <NativeSelect
                                name="ProcessStage"
                            // onChange={handleInputs}
                            >
                                <option>Select</option>
                                <option>Trainer</option>

                            </NativeSelect>
                        </FormControl>
                        <Button sx={{
                            bgcolor: "#7163ac",
                            color: "white",
                            fontWeight: 600,
                            width: 300,
                            mt: 4,
                            ":hover": {
                                bgcolor: "green",
                                color: "white"
                            }
                        }}
                            onClick={handleSubmit}>Create</Button>
                    </Box>





                </Box>
            </Box>

        </div >
    )
}