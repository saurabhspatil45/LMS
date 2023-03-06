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

export const AdminDialog = ({ open, handleClose }) => {
    const [Obser, setObser] = useState({
        Course: "", Heading: "",
        Link: "", Desc: ""
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value
        setObser({ ...Obser, [name]: value })

    }
    const submitHandler = (event) => {

        event.preventDefault();

        axios.post("http://localhost:3000/api/AllData", Obser)

            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        handleClose()
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center" }}>Create Course</DialogTitle>
                <DialogContent>
                    <Box>
                        <TextField name="Course" id="filled-basic" label="Course Name" variant="filled" onChange={handleInputs} />
                        <TextField name="Heading" id="filled-basic" label="Heading" variant="filled" onChange={handleInputs} />
                        <TextField name="Link" id="filled-basic" label="Lecture Link" variant="filled" onChange={handleInputs} />
                        <TextField
                            id="filled-multiline-static"
                            name="Desc"
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue=""
                            variant="filled"
                            onChange={handleInputs}
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

