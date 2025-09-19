import express from "express";
import morgan from "morgan";
import connect from "./db/db.js";
import userRouts from "./routes/user.routes.js";
connect();
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouts);
app.get("/", (req, res) => {
  res.send("hellow I am Server");
});

export default app;
