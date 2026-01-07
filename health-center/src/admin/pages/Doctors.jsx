import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const Doctors = () => {
  return (
    <>
      {/* Page Title */}
      <Typography
        fontWeight="bold"
        mb={{ xs: 2, sm: 3 }}
        sx={{ fontSize: { xs: "20px", sm: "28px" } }}
      >
        Doctors
      </Typography>

      {/* Add Button */}
      <Button
        variant="contained"
        sx={{
          mb: 2,
          backgroundColor: "#8bc34a",
          "&:hover": { backgroundColor: "#7cb342" },
          fontSize: { xs: "12px", sm: "14px" },
          px: { xs: 2, sm: 3 },
        }}
      >
        Add Doctor
      </Button>

      {/* Table Wrapper for Mobile Scroll */}
      <Paper sx={{ width: "100%", overflowX: "auto" }}>
        <Box sx={{ minWidth: 600 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f1f8e9" }}>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Specialization
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Experience
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontSize: { xs: "13px", sm: "16px" } }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  Dr. John Smith
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  Cardiology
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  10 Years
                </TableCell>
                <TableCell align="right">
                  <Button size="small" sx={{ fontSize: { xs: "11px", sm: "13px" } }}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    sx={{ fontSize: { xs: "11px", sm: "13px" } }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </>
  );
};

export default Doctors;
