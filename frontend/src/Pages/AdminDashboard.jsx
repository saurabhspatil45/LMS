import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function AdminDashboard() {

    const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,backgroundColor:"#7163ac"}}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           LMS Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem disablePadding onClick={()=>{navigate("/usermanegment")}}>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="User Manegment"  />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={()=>{navigate("/coureses")}}>
              <ListItemButton>
                <ListItemIcon>
                  <AdminPanelSettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Courses Manegnment"  />
              </ListItemButton>
            </ListItem>
        </List>
        
      </Drawer>
      <Box
        component="main"
        sx={{ bgcolor: 'background.default'}}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}