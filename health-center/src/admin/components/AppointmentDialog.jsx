import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const AppointmentDialog = ({
  open,
  handleClose,
  mode,
  appointmentData,
  doctorsList,
  onSubmit,
}) => {
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    status: "Pending",
  });

  useEffect(() => {
    if (mode === "edit" && appointmentData) {
      setForm(appointmentData);
    } else {
      setForm({
        patientName: "",
        doctorName: "",
        date: "",
        status: "Pending",
      });
    }
  }, [mode, appointmentData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle fontWeight="bold">
        {mode === "add" ? "Add Appointment" : "Edit Appointment"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              label="Patient Name"
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Doctor"
              name="doctorName"
              value={form.doctorName}
              onChange={handleChange}
              fullWidth
            >
              {doctorsList.map((doc) => (
                <MenuItem key={doc.id} value={doc.name}>
                  {doc.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Confirmed">Confirmed</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#8bc34a",
            "&:hover": { backgroundColor: "#7cb342" },
          }}
          onClick={handleSubmit}
        >
          {mode === "add" ? "Create" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AppointmentDialog;
