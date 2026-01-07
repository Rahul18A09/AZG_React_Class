import { Grid, Card, CardContent, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Dashboard = () => {
  return (
    <>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Doctors Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: "5px solid #8bc34a" }}>
            <CardContent>
              <LocalHospitalIcon sx={{ color: "#8bc34a", fontSize: 40 }} />
              <Typography variant="h6">Doctors</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Appointments Card */}
        <Grid item xs={12} md={6}>
          <Card sx={{ borderLeft: "5px solid #4caf50" }}>
            <CardContent>
              <EventAvailableIcon sx={{ color: "#4caf50", fontSize: 40 }} />
              <Typography variant="h6">Appointments</Typography>
              <Typography variant="h4">0</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
