import { Box } from "@mui/system";
import { UserManegmentNav } from "../../Components/UserManegmentNav";
import AdminDashboard from "../AdminDashboard";
import { TrainerApprovedDetails } from "./TrainerApprovedDetails";

export const TrainerApprovedPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <UserManegmentNav />
                    <TrainerApprovedDetails />
                </Box>
            </Box>
        </div>
    )

}

