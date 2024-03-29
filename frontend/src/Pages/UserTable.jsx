import { Box } from "@mui/system";
import AdminDashboard from "./AdminDashboard";
import { UserManegmentNav } from "../Components/UserManegmentNav";
import { UserTableDetails } from "./UserTableDetails";



export const UserTable = () => {

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AdminDashboard />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 8, p: 5 }}
                >
                    <UserManegmentNav />
                    <UserTableDetails/>

                </Box>
            </Box>
        </div>
    )
}