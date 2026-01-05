import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addDoctor, updateDoctor, deleteDoctor } from "../../store/slices/doctorSlice";
import DoctorDialog from "../components/DoctorDialog";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const AdminDoctors = () => {
  const doctors = useSelector((s) => s.doctors.list);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const handleSave = (doc) => {
    edit
      ? dispatch(updateDoctor(doc))
      : dispatch(addDoctor({ ...doc, id: uuid() }));
    setOpen(false);
    setEdit(null);
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Doctor
      </Button>

      <DoctorDialog open={open} onClose={() => setOpen(false)} onSave={handleSave} doctor={edit} />

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {doctors.map((d) => (
            <TableRow key={d.id}>
              <TableCell>{d.name}</TableCell>
              <TableCell>{d.dept}</TableCell>
              <TableCell>{d.phone}</TableCell>
              <TableCell>
                <Button onClick={() => { setEdit(d); setOpen(true); }}>Edit</Button>
                <Button color="error" onClick={() => dispatch(deleteDoctor(d.id))}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminDoctors;
