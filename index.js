const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
var escapeHtml = require("escape-html");
var session = require("express-session");
const welcomeRoutes = require("./routes/welcomeRoutes");
const textRoutes = require("./routes/textRoutes");
require('dotenv').config();

app.use(express.json()); //convert all incoming requests to json
app.use(cors({ credentials: true })); //abiding by cors policy


app.use("/", welcomeRoutes, textRoutes);

app.listen(port, () => {
    console.log("Server started at port ", port);
});