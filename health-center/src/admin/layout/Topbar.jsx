// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";

// const Topbar = () => {
//   return (
//     <AppBar
//       position="static"
//       elevation={0}
//       sx={{
//         backgroundColor: "#ffffff",
//         color: "#333",
//         borderBottom: "1px solid #e0e0e0",
//         height:"60px"
//       }}
//     >
//       <Toolbar sx={{height:"100%",px:3, display:"flex", justifyContent: "space-between",alignItems:"center" }}>
//         {/* Page Title */}
//         <Typography variant="h6" fontWeight="bold"  sx={{fontWeight: 600, fontSize: "18px", lineHeight: 1}}>
//           Admin Dashboard
//         </Typography>

//         {/* Right Actions */}
//         <Box sx={{height:"100%", display: "flex", alignItems: "center", gap: 2}}>
//           <Typography
//             variant="body2"
//            fontSize="14px"
//           >
//             Admin
//           </Typography>
//           <Button
//             variant="contained"
//             size="large"
//             sx={{fontSize:"14px",
//               textTransform: "none",
//               backgroundColor: "#8bc34a",
//               "&:hover": { backgroundColor: "#7cb342" },
//             }}
//           >
//             Logout
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Topbar;


import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme, useMediaQuery } from "@mui/material";

const Topbar = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        color: "#333",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar>
        {isMobile && (
          <IconButton onClick={onMenuClick} edge="start" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" fontWeight="bold">
          Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
