const express = require("express");

const app = express();

const port = 3001;

app.get("/", (req, res) => {
    console.log("Home!!")
    return res.status(200).json({msg: "home"})
});

app.get("/Welcome", (req, res) => {
    console.log("Welcome!!")
    return res.status(200).json({msg: "welcome"})
});


app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
