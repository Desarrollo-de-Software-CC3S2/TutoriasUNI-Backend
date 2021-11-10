const express = require("express");
const app = express();
const users = require("./routes/users.route");
const user = require("./routes/user.route");
const courses = require("./routes/courses.route");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("TutoriasUNI");
});

app.use("/api/v1/users", users);
app.use("/api/v1/user/courses", user);
app.use("/api/v1/courses", courses);

const port = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start()
