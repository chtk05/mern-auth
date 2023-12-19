import { error } from "console";
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 8080;
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDb`))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
