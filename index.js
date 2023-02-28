const express = require("express");
const scheduleJobs = require("./schedule-jobs");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const mongoUrl = process.env.DATABASE_URL;

mongoose.set("strictQuery", false);
mongoose.connect(mongoUrl);
const database = mongoose.connection;

database.on("error", (err) => {
  console.error(err);
});

database.on("connected", () => {
  console.log("database connected ...");
});

const app = express();

// start schedule jobs
// scheduleJobs();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to aziz api." });
});

require("./routes/news")(app);
require("./routes/user")(app);

app.listen(5000, () => {
  console.log("app start 5000");
});
