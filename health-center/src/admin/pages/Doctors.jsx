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
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Doctors
      </Typography>

      <Button
        variant="contained"
        sx={{
          mb: 2,
          backgroundColor: "#8bc34a",
          "&:hover": { backgroundColor: "#7cb342" },
          fontSize:"14px",
        }}
      >
        Add Doctor
      </Button>

      <Paper>
        <Table>
          <TableHead sx={{ backgroundColor: "#f1f8e9", }}>
            <TableRow>
              <TableCell  sx={{ fontSize:"16px"}}>Name</TableCell>
              <TableCell  sx={{ fontSize:"16px"}}>Specialization</TableCell>
              <TableCell  sx={{ fontSize:"16px"}}>Experience</TableCell>
              <TableCell  sx={{ fontSize:"16px"}} align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/* Dummy Row */}
            <TableRow>
              <TableCell  sx={{ fontSize:"14px"}}>Dr. John Smith</TableCell>
              <TableCell  sx={{ fontSize:"14px"}}>Cardiology</TableCell>
              <TableCell  sx={{ fontSize:"14px"}}>10 Years</TableCell>
              <TableCell  sx={{ fontSize:"14px"}} align="right">
                <Button  sx={{ fontSize:"16px"}} size="small">Edit</Button>
                <Button  sx={{ fontSize:"16px"}} size="small" color="error">
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
