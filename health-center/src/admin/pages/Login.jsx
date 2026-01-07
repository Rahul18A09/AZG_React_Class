import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Paper sx={{ p: 4, width: 350 }}>
        <Typography variant="h5" fontWeight="bold" mb={3} align="center">
          Admin Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#8bc34a",
            "&:hover": { backgroundColor: "#7cb342" },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
