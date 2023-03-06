import React from "react"
import { Routes, Route } from "react-router-dom"
import AdminDashboard from "../Pages/AdminDashboard.jsx"
import { Course } from "../Pages/Course.jsx"
import Dashboard from "../Pages/Dashboard.jsx"
import Login from "../Pages/Login.jsx"
import UserManegment from "../Pages/UserManegment.jsx"

const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/admindashboard" element={<AdminDashboard/>}/>
                <Route path="/usermanegment" element={<UserManegment/>}/>
                <Route path="/coureses" element={<Course/>}/>
            </Routes>
        </div>
    )
}
export default AllRoutes