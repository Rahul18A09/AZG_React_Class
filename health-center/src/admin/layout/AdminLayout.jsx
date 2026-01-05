import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6">Health Center Admin</Typography>
        </Toolbar>
      </AppBar>

      <Sidebar />

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
