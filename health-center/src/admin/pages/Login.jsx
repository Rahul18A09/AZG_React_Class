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
        px: { xs: 2, sm: 0 }, // side padding on mobile
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, sm: 4 },
          width: "100%",
          maxWidth: 380,
          borderRadius: 3,
        }}
      >
        <Typography
          fontWeight="bold"
          mb={{ xs: 2, sm: 3 }}
          align="center"
          sx={{ fontSize: { xs: "20px", sm: "24px" } }}
        >
          Admin Login
        </Typography>

        <TextField
          label="Username"
          fullWidth
          size="small"
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          size="small"
          sx={{ mb: 3 }}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.2,
            fontSize: { xs: "14px", sm: "16px" },
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
