const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.listen(5000, console.log("Your app is comming from 5000 port"));
