import { Box } from "@mui/system";
import { CourseAdminNav } from "../../Components/CourseAdminNav";
import AdminDashboard from "../AdminDashboard";
import { CoursePendingDetails } from "./CoursePendingDetails";

export const CoursePendingPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <CourseAdminNav />
                    <CoursePendingDetails />

                </Box>
            </Box>
        </div>
    )

}

