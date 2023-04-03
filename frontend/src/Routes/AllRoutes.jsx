import React from "react"
import { Routes, Route } from "react-router-dom"
import { CreateTrainer } from "../Components/CreateTrainer.jsx"
import AdminDashboard from "../Pages/AdminDashboard.jsx"
import { Course } from "../Pages/CoursesTrainer/Course.jsx"
import Home from "../Pages/Home.jsx"
import Login from "../Pages/Login.jsx"
import { LoginSelect } from "../Pages/LoginSelect.jsx"
// import { PlayVideo } from "../Pages/Clients/PlayVideo.jsx"
import SignUp from "../Pages/SignUp.jsx"
import { TrainerLogin } from "../Pages/TrainerLogin.jsx"
import UserManegment from "../Pages/UserManegment.jsx"
import { UserTable } from "../Pages/UserTable.jsx"
import { TrainerPage } from "../Pages/TrainerPage.jsx"
import Allcourse from "../Pages/Clients/Allcourse.jsx"
import UserTrainerPage from "../Pages/UserTrainerPage.jsx"
import { TrainerProfilePageAD } from "../Pages/AdminSideTrainerProfile/TrainerProfilePageAD.jsx"
// import { TrainerFullInfoCilent } from "../Pages/TrainerFullInfoCilent.jsx"
import { TrainerInfoPage } from "../Pages/TrainerInfoPage.jsx"
import { AdTrainerInfoPage } from "../Pages/AdTrainerInfoPage.jsx"
import { TrainerPending } from "../Pages/PendingTrainer/TrainerPending.jsx"
import { TrainerApprovedPage } from "../Pages/ApprovedTrainer/TrainerApprovedPage.jsx"
import { CourseManagenmentMainPage } from "../Pages/AdminCourseMangenment/CourseManagenmentMainPage.jsx"
import { CourseAllDraftPage } from "../Pages/AdminCourseMangenment/CourseAllDraftPage.jsx"
import { CoursePendingPage } from "../Pages/AdminCourseMangenment/CoursePendingPage.jsx"
import { CourseAllApprovedPage } from "../Pages/AdminCourseMangenment/CourseAllApprovedPage.jsx"
import { TrainerLectureMainPage } from "../Pages/TrainerLecture/TrainerLectureMainPage.jsx"
import { AdminLectureManegnment } from "../Pages/AdminLectureManagnment/AdminLectureManegnment.jsx"
import { LectureAllDraftPage } from "../Pages/AdminLectureManagnment/LectureAllDraftPage.jsx"
import { LecturePendingPage } from "../Pages/AdminLectureManagnment/LecturePendingPage.jsx"
import { LectureApprovedPage } from "../Pages/AdminLectureManagnment/LectureApprovedPage.jsx"
import LectureListClientPage from "../Pages/Clients/LectureListClientPage.jsx"
import PlayVideoPage from "../Pages/Clients/PlayVideoPage.jsx"
const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<SignUp />} />
                <Route path="/loginselect" element={<LoginSelect />} />
                <Route path="/trainerlogin" element={<TrainerLogin />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/allcourse" element={<Allcourse />} />
                <Route path="/ourtrainers" element={<UserTrainerPage />} />
                <Route path="/ourtrainers/:id" element={<TrainerInfoPage />} />
                <Route path="/usermanegment" element={<UserManegment />} />
                <Route path="/coureses" element={<Course/>} />
                <Route path="/createcourese" element={<h1>create</h1>} />
                <Route path="/allcourse/:course" element={<LectureListClientPage/>} />
                <Route path="/allcourse/:course/:id" element={<PlayVideoPage/>}/>
                <Route path="/createtrainer" element={<CreateTrainer />} />
                <Route path="/usertable" element={<UserTable />} />
                <Route path="/trainerdetails" element={<TrainerPage />} />
                <Route path="/trainerdetails/:id" element={<AdTrainerInfoPage />} />
                <Route path="/trainerprofileadmin" element={<TrainerProfilePageAD />} />
                <Route path="/trainerpending" element={<TrainerPending />} />
                <Route path="/approvedtrainer" element={<TrainerApprovedPage />} />
                <Route path="/coursemanagement" element={<CourseManagenmentMainPage />} />
                <Route path="/coursealldraft" element={<CourseAllDraftPage />} />
                <Route path="/coursependingadmin" element={<CoursePendingPage />} />
                <Route path="/courseapprovedadmin" element={<CourseAllApprovedPage />} />
                <Route path="/lecturepage" element={<TrainerLectureMainPage />} />
                <Route path="/lectureadminmanegement" element={<AdminLectureManegnment />} />
                <Route path="/lecturedraftpageadmin" element={<LectureAllDraftPage />} />
                <Route path="/lecturependingadmin" element={<LecturePendingPage />} />
                <Route path="/lectureapprovepage" element={<LectureApprovedPage />} />

            </Routes>
        </div>
    )
}
export default AllRoutes