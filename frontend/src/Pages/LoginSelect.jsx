import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";



export const LoginSelect =()=>{


    const navigate = useNavigate()
    return(
        <div>
            <Button onClick={()=>navigate("/login")}>Student</Button>

            <Button onClick={()=>navigate("/trainerlogin")}>Trainer</Button>
        </div>
    )
}