import React from "react"
import { Routes, Route } from "react-router-dom"
import AdminDashboard from "../Pages/AdminDashboard.jsx"
import { Course } from "../Pages/Course.jsx"
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx"
import { LoginSelect } from "../Pages/LoginSelect.jsx"
import { PlayVideo } from "../Pages/PlayVideo.jsx"
import SignUp from "../Pages/SignUp.jsx"
import { TrainerLogin } from "../Pages/TrainerLogin.jsx"
import UserManegment from "../Pages/UserManegment.jsx"

const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/singup" element={<SignUp/>}/>
                <Route path="/loginselect" element={<LoginSelect/>}/>
                <Route path="/trainerlogin" element={<TrainerLogin/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/usermanegment" element={<UserManegment/>}/>
                <Route path="/coureses" element={<Course/>}/>
                <Route path="/home/:id" element={<PlayVideo/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes