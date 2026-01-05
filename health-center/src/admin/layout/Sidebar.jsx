import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: 240, [`& .MuiDrawer-paper`]: { width: 240 } }}
    >
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/admin/doctors">
          <ListItemIcon><MedicalServicesIcon /></ListItemIcon>
          <ListItemText primary="Doctors" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
