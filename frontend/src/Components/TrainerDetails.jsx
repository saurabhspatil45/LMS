import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from '@mui/system';
import TrainerDeleteDialog from './TrainerDeleteDialog';
import TextField from '@mui/material/TextField';
import TrainerLiveDialog from './TrainerLiveDialog';

export const TrainerDetails = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [openL, setOpenL] = React.useState(false);
    const [deleteID, setdeleteID] = useState("")
    const [Fname, setFname] = useState("")
    const [query, setQuery] = useState("")
    const [isActive, setisActive] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenL = () => {
        setOpenL(true);
    };

    const handleCloseL = () => {
        setOpenL(false);
    };
    const GetTrainers = () => {
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
    }



    useEffect(() => {
        GetTrainers()
    }, []);

    const handleFieldUpdate = () => {
        setisActive(true);
        handleClickOpenL()
    };

    const handleFieldUpdateDEactivate = () => {
        setisActive(false);
        handleClickOpenL()
    };


    const getIdfordelete = (_id, fname) => {
        handleClickOpen()
        axios.get(`http://localhost:8080/trainer/get/${_id}`)
            .then(response => {
                setdeleteID(_id)
                setFname(fname)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const getIdforActivate = (_id, fname) => {
        axios.get(`http://localhost:8080/trainer/get/${_id}`)
            .then(response => {
                setdeleteID(_id)
                setFname(fname)
            })
            .catch(error => {
                console.error(error);
            });
        handleFieldUpdate()

    }

    const getIdforDEActivate = (_id, fname) => {
        axios.get(`http://localhost:8080/trainer/get/${_id}`)
            .then(response => {
                setdeleteID(_id)
                setFname(fname)
            })
            .catch(error => {
                console.error(error);
            });
        handleFieldUpdateDEactivate()

    }


    if (isLoading) {
        return <div><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
            <div style={{ marginTop: 20 }}>
                <div style={{ float: "left", marginBottom: 20, marginTop: 30 }}>
                    <TextField
                        id="filled-search"
                        label="Search users"
                        type="search"
                        variant="filled"
                        sx={{ width: 300 }}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <Box sx={{ mt: 7, width: 1250, display: "grid", gridTemplateColumns: "repeat(3,1fr)", rowGap: 10 }}>
                    {data.filter((item) =>
                        item.email.toLowerCase().includes(query)
                    ).map(item => (
                        <div key={item._id}>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea >
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
                                    <Button size="small" color="primary" onClick={() => getIdfordelete(item._id, item.fname, item.isActive)}>
                                        Delete
                                    </Button>
                                    <TrainerDeleteDialog open={open} handleClose={handleClose} deleteID={deleteID} Name={Fname} GetTrainers={GetTrainers} />
                                    <TrainerLiveDialog openL={openL} handleCloseL={handleCloseL} deleteID={deleteID} Name={Fname} GetTrainers={GetTrainers} isActive={isActive} />
                                    {item.isActive ? (
                                        <Button size="small" color="primary" sx={{ backgroundColor: "red", color: "white" }} onClick={() => getIdforDEActivate(item._id, item.fname, item.isActive)} >
                                            Deactivate
                                        </Button>
                                    ) : (
                                        <Button sx={{ backgroundColor: "Green", color: "white" }} onClick={() => getIdforActivate(item._id, item.fname, item.isActive)}>Make Public</Button>
                                    )
                                    }

                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </Box>
            </div>
        </div>
    )
}