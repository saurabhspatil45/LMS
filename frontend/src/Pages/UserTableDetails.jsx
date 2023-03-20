import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Table.css";
import IconButton from '@mui/material/IconButton';
// import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


export const UserTableDetails = () => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteID, setdeleteID] = useState("")
    const [query, setQuery] = useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        Getusers()
    }, []);

    const Getusers = () => {
        setIsLoading(true);
        axios.get('http://localhost:8080/user/alluser')
            .then(response => {
                setData(response.data.user);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }





    const getIdfordelete = (_id) => {
        handleClickOpen()
        axios.get(`http://localhost:8080/user/get/${_id}`)
            .then(response => {
                setdeleteID(_id)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleDelete = () => {

        setIsLoading(true);
        axios.delete(`http://localhost:8080/user/delete/${deleteID}`)
            .then(response => {
                setIsLoading(false);
                return Getusers()
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });

        handleClose()
    }



    if (isLoading) {
        return <div><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading" /></div>;
    }
    return (
        <div>
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
            <div style={{}}>
                <table>
                    <thead>
                        <tr>
                            <th>SR No</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            {/* <th>IsAdmin</th> */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.filter((item) =>
                            item.fname.toLowerCase().includes(query)
                        ).map((item, index) =>

                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.mobno}</td>
                                <td>{item.email}</td>
                                {/* <td>{item.isAdmin ? (
                                    <p>YES</p>
                                ) : (
                                    <p>NO</p>
                                )}</td> */}
                                <td>
                                    <div style={{ display: 'flex', width: 10 }}>
                                        {/* <IconButton aria-label="edit" size="large" >
                                            <Edit

                                                fontSize="inherit" sx={{ color: '#4cbb17' }} />
                                        </IconButton> */}
                                        <IconButton aria-label="delete" size="large" onClick={() => getIdfordelete(item._id)} >
                                            <DeleteIcon

                                                fontSize="inherit" sx={{ color: 'red' }} />
                                        </IconButton>


                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Are you sure you want to delete user?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Once deleted will be removed permenently from the database
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        No
                    </Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}