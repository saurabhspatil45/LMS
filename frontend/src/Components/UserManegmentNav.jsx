import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const UserManegmentNav = () => {

    const navigate = useNavigate();

    return (
        <div style={{display:"flex",justifyContent:"space-evenly",marginTop:-20}}>
            <Button variant="contained" onClick={() => navigate("/createtrainer")}>Create Trainer</Button>
            <Button variant="contained" onClick={() => navigate("/usertable")}>View All User</Button>
            <Button variant="contained" onClick={() => navigate("/trainerdetails")}>View All Trainers</Button>
        </div>
    )
}