import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
} from "@mui/material";

const Appointments = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Appointments
      </Typography>

      <Paper>
        <Table>
          <TableHead sx={{ backgroundColor: "#f1f8e9" }}>
            <TableRow>
              <TableCell>Patient</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Rahul</TableCell>
              <TableCell>Dr. John Smith</TableCell>
              <TableCell>12 Jan 2026</TableCell>
              <TableCell>
                <Chip label="Confirmed" color="success" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Appointments;
