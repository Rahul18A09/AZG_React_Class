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
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Page Title */}
        <Typography variant="h6" fontWeight="bold">
          Admin Dashboard
        </Typography>

        {/* Right Actions */}
        <Box>
          <Typography
            variant="body2"
            sx={{ display: "inline", mr: 2 }}
          >
            Admin
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#8bc34a",
              "&:hover": { backgroundColor: "#7cb342" },
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
