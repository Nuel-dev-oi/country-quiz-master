import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import { Notfound } from "./middlewares/notFound.js";
import { serverError } from "./middlewares/serverError.js";
import questionRoute from "./routes/questions.route.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Country Quiz Master</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).json({"success": "OK", "body": "About Page"});
});

app.use("/api/v1/questions", questionRoute);



app.use(Notfound);
app.use(serverError);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
