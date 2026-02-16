const express = require("express");
const app  = express();

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

// use routes
app.use("/api", userRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});