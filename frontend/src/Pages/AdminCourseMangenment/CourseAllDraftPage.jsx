import { Box } from "@mui/system";
import { CourseAdminNav } from "../../Components/CourseAdminNav";
import AdminDashboard from "../AdminDashboard";
import { CourseDraftShow } from "./CourseDraftShow";

export const CourseAllDraftPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <CourseAdminNav />
                    <CourseDraftShow />


                </Box>
            </Box>
        </div>
    )

}

