import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
import JobRouter from "./routes/JobRoutes.js";
import authRouter from "./routes/authRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
dotenv.config();

const port = process.env.PORT || 5100;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//middleware

app.use(express.json());

app.use(errorHandlerMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use("/api/v1/jobs", JobRouter);
app.use("/api/v1/auth", authRouter);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
