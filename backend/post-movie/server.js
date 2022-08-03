import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/router.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const db = process.env.DATABASE;
mongoose.connect(db).then(() => {
  console.log("DB is Connected");
});

//middlewares
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
