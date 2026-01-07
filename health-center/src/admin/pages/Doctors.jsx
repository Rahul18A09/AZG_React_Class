import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";

const Doctors = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Doctors
      </Typography>

      <Button
        variant="contained"
        sx={{
          mb: 2,
          backgroundColor: "#8bc34a",
          "&:hover": { backgroundColor: "#7cb342" },
        }}
      >
        Add Doctor
      </Button>

      <Paper>
        <Table>
          <TableHead sx={{ backgroundColor: "#f1f8e9" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Specialization</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Dummy Row */}
            <TableRow>
              <TableCell>Dr. John Smith</TableCell>
              <TableCell>Cardiology</TableCell>
              <TableCell>10 Years</TableCell>
              <TableCell align="right">
                <Button size="small">Edit</Button>
                <Button size="small" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};

export default Doctors;
