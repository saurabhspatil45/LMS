import { Box } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";


export const TrainerFullInfoCilent =()=>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const params =useParams()

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/trainer/get/${params.id}`)
            .then(response => {
                setData(response.data.trainer);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    },[params.id]);
    
    if (isLoading) {
        return <div style={{margin:"auto"}}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return(
        <div>
<Box sx={{mt: 12, width: 1250, display:"grid",gridTemplateColumns:"repeat(3,1fr)"  }}>
                {/* {data.map(item => ( */}
                        <div >
                 <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea >
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={data.avatar}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.fname} {data.lname}
                                        </Typography>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.mobno}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.email}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                   
                                </CardActions>
                            </Card>

                            </div>
                    {/* ))} */}

                </Box>
        </div>
    )
}