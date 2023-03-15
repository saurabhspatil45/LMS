import { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Table.css";
import IconButton from '@mui/material/IconButton';
import Edit from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


export const UserTableDetails = () => {
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
        return <div><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjM0NjU4Y2I4ZGQ5NDM2MTVhMDEzMjAyMDI3ZWI0MTE2ODRmNTAzZCZjdD1n/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="loading"/></div>;
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
                        {data.map((item, index) =>

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
        </div>
    )
}