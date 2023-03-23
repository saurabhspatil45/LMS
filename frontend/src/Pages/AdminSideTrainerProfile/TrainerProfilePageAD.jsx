import { Box } from "@mui/system";
import AdminDashboard from "../AdminDashboard";
import { TrainerCard } from "./TrainerCard";


export const TrainerProfilePageAD = () => {


    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                <TrainerCard />
                </Box>
            </Box>
        </div>
    )

}

