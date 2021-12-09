const express = require("express");
const app = express();
const courses = require("./routes/courses.route");
const alumnos = require("./routes/alumnos.route");
const tutores = require("./routes/tutores.route");
const bots = require("./routes/bot.route");
const auth = require("./routes/auth.route");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.raw());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

// routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/courses", courses);
app.use("/api/v1/alumnos", alumnos);
app.use("/api/v1/tutores", tutores);
app.use("/api/v1/bot",bots);

const port = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
