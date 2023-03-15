import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";


export const TrainerDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://localhost:8080/trainer/alltrainer')
            .then(response => {
                setData(response.data.trainer);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading"/></div>;
    }
    return (
        <div>
            <div style={{marginTop:80}}>
            {data.map(item => (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image={item.avatar}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {item.fname} {item.lname}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.mobno}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.email}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Delete
                    </Button>
                </CardActions>
            </Card>
             ))}
             </div>
        </div>
    )
}