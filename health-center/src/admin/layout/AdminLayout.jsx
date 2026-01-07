// import { Box } from "@mui/material";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";

// const AdminLayout = ({ children }) => {
//   return (
//     <Box sx={{ display: "flex", minHeight: "100vh" }}>
        
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right Side */}
//       <Box sx={{ flexGrow: 1, backgroundColor: "#f4f6f8" }}>
//         <Topbar />

//         {/* Page Content */}
//         <Box sx={{ p: 3 }}>
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AdminLayout;



import { Box, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const drawerWidth = 260;

const AdminLayout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
        >
          <Sidebar onClose={handleDrawerToggle} />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Sidebar />
        </Drawer>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#f4f6f8",
          width: isMobile ? "100%" : `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Topbar onMenuClick={handleDrawerToggle} />

        <Box sx={{ p: { xs: 2, md: 3 } }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;

