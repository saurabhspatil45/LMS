import React from "react"
import { Box } from "@mui/system"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export const PlayVideo = () => {

    const params = useParams()

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        axios.get(`https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture/${params.id}`)
            .then(response => {
                setData(response.data.lecture);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, [params.id]);




    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
          {/* <Box sx={{float:"left",mt:15}}>
            </Box> */}
            <Box sx={{ mt: 10, width: 1000}}>
            <Link to={`/allcourse/${data.course}`} > <Button sx={{mb:1,mr:120}} variant="contained">Back</Button></Link>

                <Card sx={{ maxWidth: 1000 }}>
                    <CardActionArea>
                        <iframe width="1000" height="500" src={data.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "start" }}>
                                {data.lname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "start" }}>
                                {data.ldes}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

        </div>
    )
}

