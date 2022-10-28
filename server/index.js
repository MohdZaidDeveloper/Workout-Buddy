require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

//DB connection
require("./db/connection");

const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

//Initialize express
const app = express();

//PORT

const port = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//Deployment




  app.use(express.static(path.join(__dirname,"./client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
  });


 
app.listen(port, () => {
  console.log(`Server is running at PORT: ${port}`);
});
