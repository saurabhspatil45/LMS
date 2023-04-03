import React from "react"
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import axios from "axios";
import LectureApproveDailog from "./DailogsLecture/LectureApproveDailog";


export const LecturePendingDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openL, setOpenL] = useState(false);
    const [ID, setID] = useState("");
    const [approved, setapproved] = useState("")
    const [lname, setlname] = useState("")

    useEffect(() => {
        GetLecture()
    }, []);



    const GetLecture = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture')
            .then(response => {
                setData(response.data.lecture.filter(item => item.status === "pending"));
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

    const getIdSatusApproved = (_id, lname) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture/${_id}`)
            .then(response => {
                setID(_id)
                setlname(lname)
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
            <LectureApproveDailog openL={openL} handleCloseL={handleCloseL} ID={ID} Name={lname} GetLecture={GetLecture} approved={approved} />

            <Box sx={{ mt: 12, display: "grid", gridTemplateColumns: "repeat(2,1fr)", columnGap: 10, rowGap: 10, width: 1000 }}>

                {data.map(item => (
                    <div key={item._id} >
                        <Card sx={{ maxWidth: 345 }}>
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
                            <Button fullWidth sx={{ backgroundColor: "green", color: "white" }} onClick={() => getIdSatusApproved(item._id, item.lname, item.status)}>Approve</Button>
                        </Card>
                    </div>
                ))}

            </Box>

        </div>
    )
}