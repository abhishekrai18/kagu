import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function(_,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"), function(err){
    res.status(500).send(err);
  })
})

const port = process.env.PORT || 8000;

Connection();

app.listen(port, () => {
  console.log(`server is running successfully on port ${port}`);
});

DefaultData();
