// import { Grid, Card, CardContent, Typography } from "@mui/material";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// const Dashboard = () => {
//   return (
//     <>
//       <Typography variant="h5" fontWeight="bold" mb={3}>
//         Dashboard
//       </Typography>

//       <Grid container spacing={3}>
//         {/* Doctors Card */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderLeft: "5px solid #8bc34a" }}>
//             <CardContent>
//               <LocalHospitalIcon sx={{ color: "#8bc34a", fontSize: 40 }} />
//               <Typography variant="h6">Doctors</Typography>
//               <Typography variant="h4">0</Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Appointments Card */}
//         <Grid item xs={12} md={6}>
//           <Card sx={{ borderLeft: "5px solid #4caf50" }}>
//             <CardContent>
//               <EventAvailableIcon sx={{ color: "#4caf50", fontSize: 40 }} />
//               <Typography variant="h6">Appointments</Typography>
//               <Typography variant="h4">0</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Dashboard;

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
        transform: "translateY(-5px)",
        boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
      },
    }}
  >
    <CardContent>
      <Box display="flex" alignItems="center" gap={2}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.9)",
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="h3" fontWeight="bold">
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
        sx={{ fontSize: "25px" }}
        variant="h4"
        fontWeight="bold"
        mb={4}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <StatCard
            sx={{ fontSize: "20px" }}
            title="Doctors"
            value={0}
            color="#8bc34a"
            icon={<LocalHospitalIcon sx={{ fontSize: 48, color: "#4caf50" }} />}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <StatCard
            sx={{ fontSize: "25px" }}
            title="Appointments"
            value={0}
            color="#4caf50"
            icon={
              <EventAvailableIcon sx={{ fontSize: 48, color: "#2e7d32" }} />
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
