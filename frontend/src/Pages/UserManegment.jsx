import React from "react";
import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Table.css";
import IconButton from '@mui/material/IconButton';
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
const UserManegment = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (

        <Box sx={{ display: 'flex' }}>
            <AdminDashboard />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', border: "2px solid red", mt: 10, p: 5 }}
            >
                <div style={{}}>
                    <table>
                        <thead>
                            <tr>
                                <th>SR No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mobile No</th>
                                <th>Email</th>
                                <th>IsAdmin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) =>

                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>{item.fname}</td>
                                    <td>{item.lname}</td>
                                    <td>{item.mobno}</td>
                                    <td>{item.email}</td>
                                    <td>{item.isAdmin ? (
                                        <p>YES</p>
                                    ) : (
                                        <p>NO</p>
                                    )}</td>
                                    <td>
                                        <div style={{ display: 'flex', width: 10 }}>
                                            <IconButton aria-label="edit" size="large" >
                                                <Edit

                                                    fontSize="inherit" sx={{ color: '#4cbb17' }} />
                                            </IconButton>
                                            <IconButton aria-label="delete" size="large"  >
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
            </Box>
        </Box>

    )
}

export default UserManegment;