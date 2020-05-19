var express = require("express");
var path = require("path");
var app = express();
var portNumber = process.env.PORT || 1611;

app.use(express.static("client"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/client/start-up/index.html"));
})

app.listen(portNumber, () => {
    console.log(`Server is now online: http://localhost:${portNumber}/`);
})