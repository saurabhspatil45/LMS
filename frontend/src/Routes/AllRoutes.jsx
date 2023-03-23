import React from "react"
import { Routes, Route } from "react-router-dom"
import { CreateTrainer } from "../Components/CreateTrainer.jsx"
import AdminDashboard from "../Pages/AdminDashboard.jsx"
import { Course } from "../Pages/CoursesTrainer/Course.jsx"
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx"
import { LoginSelect } from "../Pages/LoginSelect.jsx"
import { PlayVideo } from "../Pages/PlayVideo.jsx"
import SignUp from "../Pages/SignUp.jsx"
import { TrainerLogin } from "../Pages/TrainerLogin.jsx"
import UserManegment from "../Pages/UserManegment.jsx"
import { UserTable } from "../Pages/UserTable.jsx"
import { TrainerPage } from "../Pages/TrainerPage.jsx"
import Allcourse from "../Pages/Allcourse.jsx"
import UserTrainerPage from "../Pages/UserTrainerPage.jsx"
import { TrainerProfilePageAD } from "../Pages/AdminSideTrainerProfile/TrainerProfilePageAD.jsx"
// import { TrainerFullInfoCilent } from "../Pages/TrainerFullInfoCilent.jsx"
import { TrainerInfoPage } from "../Pages/TrainerInfoPage.jsx"
import { AdTrainerInfoPage } from "../Pages/AdTrainerInfoPage.jsx"
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
                <Route path="/allcourse" element={<Allcourse/>}/>
                <Route path="/ourtrainers" element={<UserTrainerPage/>}/>
                <Route path="/ourtrainers/:id" element={<TrainerInfoPage/>}/>
                <Route path="/usermanegment" element={<UserManegment/>}/>
                <Route path="/coureses" element={<Course/>}/>
                <Route path="/createcourese" element={<h1>create</h1>}/>
                <Route path="/home/:id" element={<PlayVideo/>}/>
                <Route path="/createtrainer" element={<CreateTrainer/>}/>
                <Route path="/usertable" element={<UserTable/>}/>
                <Route path="/trainerdetails" element={<TrainerPage/>}/>
                <Route path="/trainerdetails/:id" element={<AdTrainerInfoPage/>}/>
                <Route path="/trainerprofileadmin" element={<TrainerProfilePageAD/>}/>

            </Routes>
        </div>
    )
}
export default AllRoutes