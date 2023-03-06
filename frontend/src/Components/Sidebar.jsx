import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Sidebar = () => {


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
            <Box sx={{ display: 'flex', gap: 5, border: "2px solid black" }}>
                <Box sx={{ border: "2px solid red", height: 700, width: 200 }}>
                    <Link to={"/usermanegment"}><Button variant="contained">User</Button></Link>
                </Box>
                <Box sx={{ border: "2px solid green", width: 1250 }}>
                    {data.map(post => (
                        <Box key={post.id} sx={{ border: "2px solid black" }}>
                            <h2>{post.Course}</h2>
                            <h2>{post.Heading}</h2>
                            <iframe width="560" height="315" src={post.Link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h4>{post.Desc}</h4>
                        </Box>
                    ))}
                </Box>
            </Box>
        </div>
    )
}




export default Sidebar