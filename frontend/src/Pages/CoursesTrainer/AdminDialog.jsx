import React from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import CourseSubmitDailog from "./CourseSubmitDailog";
export const AdminDialog = ({ open, handleClose, owner }) => {
    const [openL, setOpenL] = React.useState(false);
    const [pending, setpending] = useState("")
    const [name, setname] = useState("")
    const [img, setimg] = useState("")
    const [des, setdes] = useState("")
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ID, setID] = useState("");

    useEffect(() => {
        GetCourse()
    }, []);



    const GetCourse = () => {
        setIsLoading(true);
        axios.get('http://localhost:8080/course/allcourse')
            .then(response => {
                setData(response.data.courses);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });


    }
    const handleClickOpenL = () => {
        setOpenL(true);
    };

    const handleCloseL = () => {
        setOpenL(false);
    };

    const handleStatusPending = () => {
        setpending('pending')
        handleClickOpenL()
    };
    const submitHandler = async () => {

        const payload = {
            name,
            img,
            des,
            owner,
        }


        try {
            const response = await axios.post('http://localhost:8080/course/create', payload);
            console.log(response.data)
            alert("Course Craeted")
            handleClose()

            return GetCourse()

        } catch (error) {
            alert("something went wrong")
            console.error(error);
        }

    }


    const getIdSatusPending = (_id, name) => {
        axios.get(`http://localhost:8080/course/get/${_id}`)
            .then(response => {
                setID(_id)
                setname(name)
            })
            .catch(error => {
                console.error(error);
            });
        handleStatusPending()
        console.log(pending)

    }




    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
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
                            width: 500,
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
                            onChange={(e) => setdes(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitHandler}>Create</Button>
                </DialogActions>
            </Dialog>
            <CourseSubmitDailog openL={openL} handleCloseL={handleCloseL} pending={pending} ID={ID} Name={name} GetCourse={GetCourse} />
            <Box sx={{ mt: 12, width: 1250, display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>

                {data.map(item => (
                    <div key={item._id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={item.img}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.des}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        created:{item.owner}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {item.status === "pending" ? (
                                    <Button fullWidth color="primary" sx={{ backgroundColor: "yellow", color: "white",fontWeight:600  }} disabled >Pending for approval</Button>

                                ):item.status ==="approved" ?(
                                    <Button fullWidth sx={{ backgroundColor: "green", color: "white",fontWeight:600 }} disabled>Approved</Button>
                                ): (
                                    <Button fullWidth  sx={{ backgroundColor: "red", color: "white",fontWeight:600  }} onClick={() => getIdSatusPending(item._id, item.name, item.status)}>Submit for Approval</Button>

                                )}
                            </CardActions>
                        </Card>

                    </div>
                ))}
                {/* <AdminDialog/> */}
            </Box>

        </div>
    )
}

