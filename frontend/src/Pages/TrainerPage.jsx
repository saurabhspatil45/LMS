import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { UserManegmentNav } from "../Components/UserManegmentNav";
import { TrainerDetails } from "../Components/TrainerDetails";

export const TrainerPage = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <UserManegmentNav />

                    <TrainerDetails />
                </Box>
            </Box>
        </div>
    )

}

