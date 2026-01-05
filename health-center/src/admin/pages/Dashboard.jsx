import { Grid, Card, CardContent, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      {["Doctors", "Appointments", "Patients"].map((title, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card>
            <CardContent>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Dashboard;
