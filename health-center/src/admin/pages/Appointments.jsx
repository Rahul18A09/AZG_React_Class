import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
  Box,
} from "@mui/material";

const Appointments = () => {
  return (
    <>
      {/* Page Title */}
      <Typography
        fontWeight="bold"
        mb={{ xs: 2, sm: 3 }}
        sx={{ fontSize: { xs: "20px", sm: "28px" } }}
      >
        Appointments
      </Typography>

      {/* Table Wrapper */}
      <Paper sx={{ width: "100%", overflowX: "auto" }}>
        <Box sx={{ minWidth: 600 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f1f8e9" }}>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Patient
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Doctor
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Date
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "13px", sm: "16px" } }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  Rahul
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  Dr. John Smith
                </TableCell>
                <TableCell sx={{ fontSize: { xs: "12px", sm: "14px" } }}>
                  12 Jan 2026
                </TableCell>
                <TableCell>
                  <Chip
                    label="Confirmed"
                    color="success"
                    size="small"
                    sx={{ fontSize: { xs: "11px", sm: "13px" } }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </>
  );
};

export default Appointments;
