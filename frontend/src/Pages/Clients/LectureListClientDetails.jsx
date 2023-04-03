import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const LectureListClientDetails = () => {

    const params = useParams()

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture")
            .then(response => {
                setData(response.data.lecture.filter(item => item.isActive === true && item.course === `${params.course}`));
                setIsLoading(false);

            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, [params.course]);

    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 8, mt: 12 }}>

            <h1>{params.course}</h1>

            {data.map(item => (

       <Link to={`/allcourse/${params.course}/${item._id}`}>

                <div key={item._id}>
                    
                    <Item
                        sx={{
                            my: 1,
                            // mx: 'auto',
                            p: 3,
                            backgroundColor: "#f0f0f0",
                        }}
                    >
                        <Stack spacing={2} direction="row" alignItems="center">
                            {/* <Avatar>W</Avatar> */}
                            <Typography noWrap sx={{ color: "blue", fontSize: 20, fontWeight: 600 }}>{item.lecture}</Typography>
                            <Typography noWrap sx={{ color: "#d946ef", fontSize: 20, fontWeight: 400 }}>{item.lname}</Typography>
                        </Stack>
                    </Item>
                </div>
                </Link>
            ))}
        </Box>
    )
}