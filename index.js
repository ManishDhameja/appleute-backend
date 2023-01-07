import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import {config} from "dotenv";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (process.env.NODE_ENV !== "production") {
  config({path: __dirname + "/.env"});
} else {
  config();
}

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Backend running on 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
