import { Box } from "@mui/system";
import { LectureAdminNav } from "../../Components/LectureAdminNav";
import AdminDashboard from "../AdminDashboard";
import { LectureDraftDetails } from "./LectureDraftDetails";

export const LectureAllDraftPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <LectureAdminNav />
                    <LectureDraftDetails />

                </Box>
            </Box>
        </div>
    )

}

