import React from "react"
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import axios from "axios";
import LectureActiveDialog from "./DailogsLecture/LectureActiveDialog";


export const LectureApproveDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [openL, setOpenL] = useState(false);
    const [ID, setID] = useState("");
    const [isActive, setisActive] = useState(false)
    const [lname, setlname] = useState("")
    const [message, setmessage] = useState("")


// ====================================================================================================================================================

    useEffect(() => {
        GetApprovedLecture()
    }, []);



    const GetApprovedLecture = () => {
        setIsLoading(true);
        axios.get('https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture')
            .then(response => {
                setData(response.data.lecture.filter(item => item.status === "approved"));
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }

// ====================================================================================================================================================

    const handleClickOpenL = () => {
        setOpenL(true);
    };

    const handleCloseL = () => {
        setOpenL(false);
    };

    
// ====================================================================================================================================================

    
    const handleActiveStaus = () => {
        setisActive(true)
        setmessage("Are You Sure Want To Make Lecture Active")
        handleClickOpenL()
    };

// ====================================================================================================================================================
    const getIdSatusActive = (_id, lname) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture/${_id}`)
            .then(response => {
                setID(_id)
                setlname(lname)
            })
            .catch(error => {
                console.error(error);
            });
        handleActiveStaus()
    }

// ====================================================================================================================================================


// ====================================================================================================================================================
    const handleDeActiveStaus = () => {
        setisActive(false)
        setmessage("Are You Sure Want To Make Lecture Deactive")
        handleClickOpenL()
    };

//====================================================================================================================================================

    const getIdSatusDEActive = (_id, lname) => {
        axios.get(`https://fair-blue-capybara-vest.cyclic.app/lecture/getlecture/${_id}`)
            .then(response => {
                setID(_id)
                setlname(lname)
            })
            .catch(error => {
                console.error(error);
            });
        handleDeActiveStaus()
    }
// ====================================================================================================================================================

    if (isLoading) {
        return <div style={{ margin: "auto" }}><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
{/* ==================================================================================================================================================== */}

            <LectureActiveDialog openL={openL} handleCloseL={handleCloseL} ID={ID} Name={lname} GetApprovedLecture={GetApprovedLecture} isActive={isActive} message={message} />

{/* ==================================================================================================================================================== */}
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
                            {item.isActive ? (
                                <Button fullWidth sx={{ backgroundColor: "green", color: "white", fontWeight: 600 }} onClick={() => getIdSatusDEActive(item._id, item.lname, item.status)}>Deactivate</Button>

                            ) : (

                                <Button fullWidth sx={{ backgroundColor: "red", color: "white", fontWeight: 600 }} onClick={() => getIdSatusActive(item._id, item.lname, item.status)}>Make Active</Button>


                            )}
                        </Card>
                    </div>
                ))}

            </Box>

        </div>
    )
}