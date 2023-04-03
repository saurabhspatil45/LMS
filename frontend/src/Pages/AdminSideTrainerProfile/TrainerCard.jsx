import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const TrainerCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [updateId, setUpdateId] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [mobno, setMobo] = useState("")
    const [email, setEmail] = useState("")
    const [position, setposition] = useState("")
    const [company, setcompany] = useState("")
    const [education, seteducation] = useState("")
    const [avatar, setavatar] = useState("")
    const [skills,setskills]=useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        GetTrainerProfile()
    }, []);


    const GetTrainerProfile = () => {
        const tok = localStorage.getItem('LMS_Admin_Token');
        const decodedToken = jwt_decode(tok);
        const user = decodedToken.userId;
        setIsLoading(true);

        axios.get(`https://fair-blue-capybara-vest.cyclic.app/trainer/alltrainer`)
            .then(response => {
                setData(response.data.trainer.filter(item => item._id === user))
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }

    const GetIDforUpdate = (id, fname, lname, mobno, email, position, company, education,skills, avatar) => {
        setUpdateId(id)
        setFname(fname)
        setLname(lname)
        setMobo(mobno)
        setEmail(email)
        setposition(position)
        setcompany(company)
        seteducation(education)
        setskills(skills)
        setavatar(avatar)
        handleClickOpen()
    }


    const UpdateProfile = (_id, fname, lname, mobno, email, position, company, education,skills, avatar) => {
        let uitem = { id: _id, fname, lname, mobno, email, position, company, education,skills, avatar }

        axios.patch(`https://fair-blue-capybara-vest.cyclic.app/trainer/patch/${updateId}`, uitem)
            .then(response => {
                return GetTrainerProfile()
            })
            .catch(error => {
                console.error(error);
            });

        handleClose()
    }



    if (isLoading) {
        return <div><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
            <form>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Update Profile
                            </Typography>
                            <Button autoFocus color="inherit" onClick={() => { UpdateProfile(updateId, fname, lname, mobno, email, position, company, education, skills,avatar) }}>
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Box component="form" sx={{ ml: 3 }}>
                        <Grid container spacing={3} sx={{ marginTop: 5, }}>

                            <Grid item sm={2.5}>
                                <TextField
                                    name="Fname"
                                    value={fname}
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={2.5}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    value={lname}
                                    name="lastName"
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={2.5}>
                                <TextField
                                    fullWidth
                                    name="Mobile"
                                    value={mobno}
                                    label="Mobile Number"
                                    type="number"
                                    onChange={(e) => setMobo(e.target.value)}
                                />

                            </Grid>

                            <Grid item sm={2.5}>
                                <TextField
                                    fullWidth
                                    value={email}
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    disabled
                                // onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>


                            <Grid item sm={2.5}>
                                <TextField
                                    name="position"
                                    label="Position"
                                    value={position}
                                    multiline
                                    fullWidth
                                    onChange={(e) => setposition(e.target.value)}
                                />
                            </Grid>

                            <Grid item sm={2.5}>
                                <TextField
                                    value={company}
                                    label="Company"
                                    multiline
                                    maxRows={3}
                                    fullWidth
                                    onChange={(e) => setcompany(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={2.5}>
                                <TextField
                                    label="Education"
                                    value={education}
                                    multiline
                                    maxRows={3}
                                    fullWidth
                                    onChange={(e) => seteducation(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={2.5}>
                                <TextField
                                    label="Skills"
                                    value={skills}
                                    multiline
                                    maxRows={3}
                                    fullWidth
                                    onChange={(e) => setskills(e.target.value)}
                                />
                            </Grid>
                            <Grid item sm={4}>
                                <TextField
                                    label="avatar"
                                    value={avatar}
                                    multiline
                                    fullWidth
                                    onChange={(e) => setavatar(e.target.value)}
                                />
                            </Grid>

                        </Grid>
                    </Box>
                </Dialog>

            </form>

            {/* --------------------------------------------------------------------------------------------------- */}
            {data.map(item => (
                <div key={item.id}>

                    <Card sx={{ maxWidth: 345 }} >
                        <CardActionArea  >
                            <CardMedia
                                height="200"
                                alt="green iguana"
                            >
                                <img src={item.avatar} alt="avatar" style={{ height: 250, width: 250 }} />
                            </CardMedia>
                            <CardContent >
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.fname} {item.lname}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.mobno}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.position}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.education}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.skills}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <TrainerUpdateDailog open={open} handleClose={handleClose} updateId={updateId} Fname={Fname} GetTrainerProfile={GetTrainerProfile} GetIDforUpdate={GetIDforUpdate} /> */}
                        <CardActions>
                            <Button onClick={() => { GetIDforUpdate(item._id, item.fname, item.lname, item.mobno, item.email, item.position, item.company, item.education, item.skills,item.avatar) }}>Update Details</Button>

                        </CardActions>
                    </Card>
                </div>
            ))}



        </div>
    )
}