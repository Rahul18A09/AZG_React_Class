import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

const Topbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#333",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding:"20px " }}>
        {/* Page Title */}
        <Typography variant="h6" fontWeight="bold"  sx={{paddingBottom:"10px", fontSize:"18px"}}>
          Admin Dashboard
        </Typography>

        {/* Right Actions */}
        <Box>
          <Typography
            variant="body2"
            sx={{ display: "inline", mr: 2, fontSize:"14px",}}
          >
            Admin
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8bc34a", padding:"2",
              "&:hover": { backgroundColor: "#7cb342" }, fontSize:"14px"
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
