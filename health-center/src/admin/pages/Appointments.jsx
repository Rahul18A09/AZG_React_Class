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
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Appointments
      </Typography>

      <Paper>
        <Table>
          <TableHead sx={{ backgroundColor: "#f1f8e9" }}>
            <TableRow>
              <TableCell  sx={{ fontSize:"16px"}}>Patient</TableCell>
              <TableCell  sx={{ fontSize:"16px"}}>Doctor</TableCell>
              <TableCell  sx={{ fontSize:"16px"}}>Date</TableCell>
              <TableCell  sx={{ fontSize:"16px"}}>Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell  sx={{ fontSize:"14px"}}>Rahul</TableCell>
              <TableCell  sx={{ fontSize:"14px"}}>Dr. John Smith</TableCell>
              <TableCell  sx={{ fontSize:"14px"}}>12 Jan 2026</TableCell>
              <TableCell  sx={{ fontSize:"14px"}}>
                <Chip  sx={{ fontSize:"14px"}} label="Confirmed" color="success" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Appointments;
