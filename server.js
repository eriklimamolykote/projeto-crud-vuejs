const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {

    origin: "http://localhost:8081"

};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get( "/", (req, res) => {
    res.json({ message: "Bem-vindo ao aplicativo." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor está executando na port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync();