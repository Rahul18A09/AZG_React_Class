import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";

const DoctorDialog = ({ open, handleClose, mode, doctorData, onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    experience: "",
  });

  // Prefill form when editing
  useEffect(() => {
    if (mode === "edit" && doctorData) {
      setForm(doctorData);
    } else {
      setForm({ name: "", specialization: "", experience: "" });
    }
  }, [mode, doctorData]);

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
        {mode === "add" ? "Add Doctor" : "Edit Doctor"}
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              label="Doctor Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Specialization"
              name="specialization"
              value={form.specialization}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Experience (Years)"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              fullWidth
            />
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
          {mode === "add" ? "Add" : "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DoctorDialog;
