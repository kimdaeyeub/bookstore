import express from "express";
import { PORT } from "./config";
import env from "dotenv";
import mongoose from "mongoose";
import { Book } from "./models/bookModel";
import booksRoute from "./routes/bookRoute";
import cors from "cors";

env.config();

const app = express();

app.use(express.json());
app.use("/books", booksRoute);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET,POST,PUT,DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  return res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("✅ DB connect");
    app.listen(8000, () =>
      console.log(`✅ Server is runnin on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
