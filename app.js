const express = require("express");
const app = express();
const courses = require("./routes/courses.route");
const alumnos = require("./routes/alumnos.route");
const tutores = require("./routes/tutores.route");
const auth = require("./routes/auth.route");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// routes
app.use("/api/v1/auth", auth);
app.use("/api/v1/courses", courses);
app.use("/api/v1/alumnos", alumnos);
app.use("/api/v1/tutores", tutores);

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
