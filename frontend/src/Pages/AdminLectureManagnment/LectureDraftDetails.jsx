import { useState, useEffect } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from "@mui/system";
// import {Button} from "@mui/material";


export const LectureDraftDetails = () => {
    const [datalec, setdatalec] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        GetAllLectures()
    }, []);

    const GetAllLectures = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture')
            .then(response => {
                setdatalec(response.data.lecture.filter(item =>  item.status === "draft"));
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
        <Box sx={{ mt: 12, display: "grid", gridTemplateColumns: "repeat(2,1fr)" ,columnGap:10, rowGap:10, width:1000}}>

            {datalec.map(item=> (
                    <div key={item._id} >
                    <Card  sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                        <iframe width="300" height="140" src={item.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  {/* <Link to={`/home/${post.id}`}>{post.Heading}</Link> */}
                                  {item.lname}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.ldes}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </div>
                    ))}

            </Box>
    )
}