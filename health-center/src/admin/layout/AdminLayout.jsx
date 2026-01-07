import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
        
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <Box sx={{ flexGrow: 1, backgroundColor: "#f4f6f8" }}>
        <Topbar />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
