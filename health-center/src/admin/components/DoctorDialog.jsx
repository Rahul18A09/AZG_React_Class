import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

const DoctorDialog = ({ open, onClose, onSave, doctor }) => {
  const [form, setForm] = useState({ name: "", dept: "", phone: "" });

  useEffect(() => {
    if (doctor) setForm(doctor);
  }, [doctor]);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{doctor ? "Edit Doctor" : "Add Doctor"}</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          label="Name"
          margin="dense"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          fullWidth
          label="Department"
          margin="dense"
          value={form.dept}
          onChange={(e) => setForm({ ...form, dept: e.target.value })}
        />
        <TextField
          fullWidth
          label="Phone"
          margin="dense"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={() => onSave(form)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DoctorDialog;
