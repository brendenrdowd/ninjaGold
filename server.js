const express = require("express"),
    app = express(),
    path = require("path"),
    bP = require("body-parser"),
    dotenv = require('dotenv').config(),
    port = process.env.PORT || 8080,
    session = require("express-session");

app.use(express.static(path.join(__dirname, "/client/dist/client")));
app.use(bP.json());
app.use(session({
    secret: process.env.SECRET_KEY, saveUninitialized: true
}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port, function () {
    console.log("listening on port:" + port);
})