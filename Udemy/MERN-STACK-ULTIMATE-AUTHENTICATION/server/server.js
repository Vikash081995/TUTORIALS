import express from "express";
import authRoutes from "./routes/authRoutes.js";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

//middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  app.use(cors({ orgin: `http://localhost:3000` }));
}

//middleware
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.get("/api/signup", (req, res) => {
  res.json({
    data: "you hit your signup endpoint"
  });
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
