import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const StatCard = ({ title, value, icon, color }) => (
  <Card
    sx={{
      height: "100%",
      borderRadius: 3,
      background: `linear-gradient(135deg, ${color} 0%, #ffffff 90%)`,
      boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
      transition: "0.3s",
      "&:hover": {
        transform: { xs: "none", md: "translateY(-5px)" },
        boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
      },
    }}
  >
    <CardContent
      sx={{
        p: { xs: 2, sm: 3 },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={{ xs: 1.5, sm: 2 }}
      >
        <Box
          sx={{
            p: { xs: 1, sm: 1.5 },
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ fontSize: { xs: "14px", sm: "16px" } }}
          >
            {title}
          </Typography>

          <Typography
            fontWeight="bold"
            sx={{ fontSize: { xs: "28px", sm: "36px" } }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  return (
    <>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={{ xs: 2, sm: 4 }}
        sx={{ fontSize: { xs: "20px", sm: "25px" } }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 4 }}>
        <Grid item xs={12} sm={6}>
          <StatCard
            title="Doctors"
            value={0}
            color="#8bc34a"
            icon={
              <LocalHospitalIcon
                sx={{
                  fontSize: { xs: 32, sm: 48 },
                  color: "#4caf50",
                }}
              />
            }
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <StatCard
            title="Appointments"
            value={0}
            color="#4caf50"
            icon={
              <EventAvailableIcon
                sx={{
                  fontSize: { xs: 32, sm: 48 },
                  color: "#2e7d32",
                }}
              />
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
