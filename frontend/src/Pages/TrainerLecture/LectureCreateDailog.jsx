import React from "react"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import LectureSubmitDailog from "./LectureSubmitDailog";


export const LectureCreateDailog = ({ open, handleClose, owner }) => {
    const [openL, setOpenL] = useState(false);
    const [pending, setpending] = useState("")
    const [course, setcourse] = useState("")
    const [lecture, setlecture] = useState("")
    const [lname, setlname] = useState("")
    const [video, setvideo] = useState("")
    const [ldes, setldes] = useState("")
    const [data, setData] = useState([]);
    const [datalec, setdatalec] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [ID, setID] = useState("");

    useEffect(() => {
        GetCourse()
    }, []);

    useEffect(() => {
        GetAllLectures()
    }, []);


    const GetCourse = () => {
        axios.get('https://fair-blue-capybara-vest.cyclic.app/course/allcourse')
            .then(response => {
                setData(response.data.courses.filter(item => item.status === "approved"));
            })
            .catch(error => {
                console.error(error);
            });
    }




    const GetAllLectures = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture')
            .then(response => {
                setdatalec(response.data.lecture);
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

    // const handleStatusPending = () => {
    //     setpending('pending')
    //     handleClickOpenL()
    // };
    const CreateLecture = async () => {

        const payload = {
            course,
            lecture,
            lname,
            video,
            ldes,
            owner,
        }


        try {
            const response = await axios.post('https://fair-blue-capybara-vest.cyclic.app/lecture/create', payload);
            console.log(response.data)
            alert("Lecture Created")
            handleClose()

            return GetAllLectures()

        } catch (error) {
            alert("something went wrong")
            console.error(error);
        }

    }

    const handleStatusPending = () => {
        setpending('pending')
        handleClickOpenL()
    };

    const getIdSatusPending = (_id, lname) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture/${_id}`)
            .then(response => {
                setID(_id)
                setlname(lname)
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
                        <InputLabel id="demo-simple-select-label">Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={course}
                            label="Age"
                            fullWidth
                            onChange={(e) => setcourse(e.target.value)}
                        >
                            {data.map(item => (
                                <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem>
                            ))}

                        </Select>
                        <TextField
                            fullWidth
                            name="lecture"
                            required
                            id="lecture"
                            label="lecture no"
                            autoFocus
                            onChange={(e) => setlecture(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            name="lname"
                            required
                            id="firstName"
                            label="Lecture name"
                            autoFocus
                            onChange={(e) => setlname(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            name="video"
                            required
                            label="video"
                            autoFocus
                            onChange={(e) => setvideo(e.target.value)}
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
                            onChange={(e) => setldes(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={CreateLecture}>Create</Button>
                </DialogActions>
            </Dialog>
            {/* <CourseSubmitDailog openL={openL} handleCloseL={handleCloseL} pending={pending} ID={ID} Name={name} GetCourse={GetCourse} /> */}
            <LectureSubmitDailog openL={openL} handleCloseL={handleCloseL} pending={pending} Name={lname} ID={ID} GetAllLectures={GetAllLectures} />
            {/* <Box sx={{ mt: 12, width: 1250, display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>

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
            </Box> */}
            <Box sx={{ mt: 12, display: "grid", gridTemplateColumns: "repeat(2,1fr)", columnGap: 10, rowGap: 10, width: 1000 }}>

                {datalec.map(item => (
                    <div key={item._id} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <iframe width="300" height="140" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {/* <Link to={`/home/${post.id}`}>{post.Heading}</Link> */}
                                        {item.lname}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.ldes}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            {item.status === "pending" ? (
                                <Button fullWidth color="primary" sx={{ backgroundColor: "yellow", color: "white", fontWeight: 600 }} disabled >Pending for approval</Button>

                            ) : item.status === "approved" ? (
                                <Button fullWidth sx={{ backgroundColor: "green", color: "white", fontWeight: 600 }} disabled>Approved</Button>
                            ) : (
                                <Button fullWidth sx={{ backgroundColor: "red", color: "white" }} onClick={() => getIdSatusPending(item._id, item.lname, item.status)}>Submit For Approval</Button>

                            )}
                            {/* <Button fullWidth sx={{ backgroundColor: "red", color: "white" }} onClick={() => getIdSatusPending(item._id, item.lname, item.status)}>Submit For Approval</Button> */}
                        </Card>
                    </div>
                ))}

            </Box>

        </div>
    )
}

