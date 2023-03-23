import React from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios"

export const AdminDialog = ({ open, handleClose,owner }) => {
    const [name,setname] =useState("")
    const [img,setimg] =useState("")
    const [des,setdes] =useState("")


    const submitHandler = async () => {
        
        const payload = {
            name,
            img,
            des,
            owner,
          }


          try {
            const response = await axios.post('http://localhost:8080/course/create', payload);
            alert("Course Craeted")
            console.log(response.data)
          } catch (error) {
            alert("something went wrong")
            console.error(error);
          }
        handleClose()
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center" }}>Create Course</DialogTitle>
                <DialogContent>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            p: 1,
                            m: 1,
                            width:500,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            gap: 1
                        }}
                    >


                        <TextField
                            fullWidth
                            name="firstName"
                            required
                            id="firstName"
                            label="Course Name"
                            autoFocus
                            onChange={(e) => setname(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            name="image"
                            required
                            label="image"
                            autoFocus
                            onChange={(e) => setimg(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            name="owner"
                            required
                            label="owner"
                            value={owner}
                            autoFocus
                            // onChange={(e) => setowner(e.target.value)}
                        />
                        
                        <TextField
                            fullWidth
                            label="Description"
                            multiline
                            rows={4}
                            onChange={(e)=> setdes(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitHandler}>Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

