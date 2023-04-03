import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LectureAdminNav = () => {

    const navigate = useNavigate();

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: -20 }}>
            <Button variant="contained" onClick={() => navigate("/lecturedraftpageadmin")}>All Draft Lec</Button>
            <Button variant="contained" onClick={() => navigate("/lecturependingadmin")}>View pending Lec</Button>
            <Button variant="contained" onClick={() => navigate("/lectureapprovepage")}>View Approved Lec</Button>
            <Button variant="contained" onClick={() => navigate("")}>View Rejected Lec</Button>
        </div>
    )
}