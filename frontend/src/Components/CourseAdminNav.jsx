import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CourseAdminNav = () => {

    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: -20 }}>
            <Button variant="contained" onClick={() => navigate("/coursealldraft")}>All Draft</Button>
            <Button variant="contained" onClick={() => navigate("/coursependingadmin")}>View pending</Button>
            <Button variant="contained" onClick={() => navigate("/courseapprovedadmin")}>View Approved</Button>
            <Button variant="contained" onClick={() => navigate("/trainerpending")}>View Rejected</Button>
        </div>
    )
}