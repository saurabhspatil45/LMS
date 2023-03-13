import React from "react"
import { Box } from "@mui/system"
import UserDashboard from "../Components/UserDashboard";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const PlayVideo =()=>{

    const params =useParams()

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/AllData/${params.id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [params.id]);


    return(
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard/>
                <Box sx={{mt: 15, width: 1250 }}>

                <Card sx={{ maxWidth: 1000 }}>
                        <CardActionArea>
                        <iframe width="1000" height="500" src={data.Link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"  sx={{textAlign:"start" }}>
                                  {data.Heading}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textAlign:"start" }}>
                                    {data.Desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>          
              </Box>
            </Box>

        </div>
    )
}

