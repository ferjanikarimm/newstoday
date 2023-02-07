const express = require("express");
const scheduleJobs = require("./schedule-jobs");
const mongoose = require("mongoose");

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
scheduleJobs();

app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to aziz api." });
});

require("./routes/news")(app);

app.listen(3000, () => {
  console.log("app start 3000");
});
