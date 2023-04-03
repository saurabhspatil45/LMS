import React from "react"
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import axios from "axios";


export const CourseDraftShow = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        GetCourse()
    }, []);



    const GetCourse = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/course/allcourse')
            .then(response => {
                setData(response.data.courses.filter(item =>  item.status === "draft"));
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });


    }

    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
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

                            </CardActions>
                        </Card>

                    </div>
                ))}
            </Box>

        </div>
    )
}