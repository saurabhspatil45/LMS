import React from "react"
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import CourseActiveDialog from "./Dailogs/CourseActiveDialog";


export const CourseAllApprovedDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openL, setOpenL] = useState(false);
    const [ID, setID] = useState("");
    const [isActive, setisActive] = useState(false)
    const [name, setname] = useState("")
    const [message, setmessage] = useState("")

    useEffect(() => {
        GetCourse()
    }, []);



    const GetCourse = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/course/allcourse')
            .then(response => {
                setData(response.data.courses.filter(item => item.status === "approved"));
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

    const handleActiveStaus = () => {
        setisActive(true)
        setmessage("Are You Sure Want To Make Course Active")
        handleClickOpenL()
    };

    const handleDeActiveStaus = () => {
        setisActive(false)
        setmessage("Are You Sure Want To Make Course Deactive")
        handleClickOpenL()
    };

    const getIdSatusActive = (_id, name) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/course/get/${_id}`)
            .then(response => {
                setID(_id)
                setname(name)
            })
            .catch(error => {
                console.error(error);
            });
        handleActiveStaus()
    }

    const getIdSatusDEActive = (_id, name) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/course/get/${_id}`)
            .then(response => {
                setID(_id)
                setname(name)
            })
            .catch(error => {
                console.error(error);
            });
        handleDeActiveStaus()
    }
    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
            <CourseActiveDialog openL={openL} handleCloseL={handleCloseL} ID={ID} Name={name} GetCourse={GetCourse} isActive={isActive} message={message} />
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

                                {item.isActive ? (
                                    <Button sx={{ backgroundColor: "green", color: "white", fontWeight: 600 }} onClick={() => getIdSatusDEActive(item._id, item.name, item.status)}>Deactivate</Button>
                                ) : (
                                    <Button sx={{ backgroundColor: "red", color: "white", fontWeight: 600 }} onClick={() => getIdSatusActive(item._id, item.name, item.status)}>Make Active</Button>

                                )}
                            </CardActions>
                        </Card>

                    </div>
                ))}
            </Box>

        </div>
    )
}