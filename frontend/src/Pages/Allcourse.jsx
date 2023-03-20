import { Box } from "@mui/system";
import React from "react";
import UserDashboard from "../Components/UserDashboard";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Allcourse = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/AllData')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <UserDashboard />
                <Box sx={{mt: 12, width: 1250, display:"grid",gridTemplateColumns:"repeat(3,1fr)" }}>

                {data.map(post => (
                    <div key={post.id} >
                    <Card  sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                        <iframe width="300" height="140" src={post.Link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  <Link to={`/home/${post.id}`}>{post.Heading}</Link>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.Desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                    ))}

                </Box>
            </Box>

        </div>
    )
}


export default Allcourse