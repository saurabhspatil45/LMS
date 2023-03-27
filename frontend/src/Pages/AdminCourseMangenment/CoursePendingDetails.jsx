import React from "react"
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import CourseApproveAdminDailog from "./Dailogs/CourseApproveAdminDailog";


export const CoursePendingDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openL, setOpenL] = useState(false);
    const [ID, setID] = useState("");
    const [approved, setapproved] = useState("")
    const [name, setname] = useState("")

    useEffect(() => {
        GetCourse()
    }, []);



    const GetCourse = () => {
        setIsLoading(true);
        axios.get('http://localhost:8080/course/allcourse')
            .then(response => {
                setData(response.data.courses.filter(item =>  item.status === "pending"));
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

    const handleStatusApproval = () => {
        setapproved('approved')
        handleClickOpenL()
    };

    const getIdSatusApproved = (_id, name) => {
        axios.get(`http://localhost:8080/course/get/${_id}`)
            .then(response => {
                setID(_id)
                setname(name)
            })
            .catch(error => {
                console.error(error);
            });
            handleStatusApproval()

    }
    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
            <CourseApproveAdminDailog openL={openL} handleCloseL={handleCloseL} ID={ID} Name={name} GetCourse={GetCourse} approved={approved}/>
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
                            <Button sx={{backgroundColor:"green", color:"white"}} onClick={() => getIdSatusApproved(item._id, item.name, item.status)}>Approve</Button>
                            </CardActions>
                        </Card>

                    </div>
                ))}
            </Box>

        </div>
    )
}