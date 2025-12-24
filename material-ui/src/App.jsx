import {
  Button,
  createTheme,
  Paper,
  ThemeProvider,
} from "@mui/material";
import {Box, Grid} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" sx={{background:"green", "&:hover" : {backgroundColor:"lightgreen"},
      }}>
          Custom Styling
        </Button>
      </ThemeProvider>

      <Box sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper sx={{background:"orange", "&:hover":{backgroundColor:"white", color:"orange"}, padding: 2 }}>Left</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{background:"lightpink", "&:hover":{backgroundColor:"white", color:"lightpink"}, padding: 2 }}>Right</Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
