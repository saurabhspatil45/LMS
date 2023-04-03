import { Box } from "@mui/system";
import { LectureAdminNav } from "../../Components/LectureAdminNav";
import AdminDashboard from "../AdminDashboard";

export const AdminLectureManegnment = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <LectureAdminNav />

                </Box>
            </Box>
        </div>
    )

}

