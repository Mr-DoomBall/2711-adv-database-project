const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path");
const url = require("url");
const port = 3000;
//const mongoose = require("mongoose");
const mysql = require("mysql");
const MongoClient = require("mongodb").MongoClient;
const neo4j = require("neo4j-driver");
const mongoDBpipelines = require("./public/mongoDBpipelines");


// Please uncomment after finish SQL
/* SQL */
// connection
// var con = mysql.createConnection({
//     host: "localhost",
//     port: "7778",
//     user: "root",
//     password: "root",
//     database : "diabetic_db"
// });
//
// con.connect(function (err) {
//     if (err) throw "Connection to SQL failed";
//     console.log("Connected to SQL");
//     app.locals.con = con;
// });
/* SQL */


/* MongoDB */
// connection
const mongoDBurl = "mongodb://localhost:27017/diabetic_db";

MongoClient.connect(mongoDBurl, {useNewUrlParser: true, retryWrites: true, useUnifiedTopology: true}, function (err, client) {
    if (err) throw "Connection to MongoDB failed";
    const db = client.db("diabetic_db");
    const collection = db.collection("main_table");
    app.locals.collection = collection;
    console.log("Connected to MongoDB");
});
/* MongoDB */


// Please uncomment after finish Neo4j
/* Neo4j */
// connection
// const neo4jUrl = "neo4j://localhost:7687";
// const driver = neo4j.driver(neo4jUrl, neo4j.auth.basic("neo4j", "password"));
// const session = driver.session({ database: "neo4j", defaultAccessMode: neo4j.session.READ });
//
// session.run("RETURN 1").then(function (res) {
//     console.log("Connected to Neo4j");
// }).catch(function (err) {
//     console.log("Connection to Neo4j failed");
// }).then(function () {
//     session.close();
// });
/* Neo4j */


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // This line is crucial

app.use(function(req, res, next) {
    res.setHeader("Connection", "close");
    next();
});

// use stylesheet in /public folder
app.use(express.static(__dirname + "/public"));

// set views to /views folder
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// initialize root directory to /views/index.ejs
app.get("/", function (req, res) {
    res.render("index");
});

// process form submission
// app.post("/process", function (req, res) {
//     if (req.body.database == "sql") {
//         res.redirect(url.format({
//             pathname: "/sql/" + "query" + req.body.query,
//         }));
//     } else if (req.body.database == "mongodb") {
//         res.redirect(url.format({
//             pathname: "/mongo/" + "query" + req.body.query,
//         }));
//     } else if (req.body.database == "neo4j") {
//         res.redirect(url.format({
//             pathname: "/neo4j/" + "query" + req.body.query,
//         }));
//     }
// });

// Rewirte the app.post to get it work
app.post("/process", function (req, res) {
    console.log(req.body); // Add this line to see what is being received
    const databaseType = req.body.database;
    const queryId = req.body.query;
    const queryKey = `query${queryId}`; // This matches the keys in mongoDBpipelines

    if (databaseType === "mongodb") {
        const collection = req.app.locals.collection;
        if (mongoDBpipelines[queryKey]) {
            collection.aggregate(mongoDBpipelines[queryKey], { allowDiskUse: true }).toArray()
                .then(function (results) {
                    res.render("mongo", {
                        data: results
                    });
                })
                .catch(function (error) {
                    console.error(error);
                    res.status(500).send("Error processing MongoDB query");
                });
        } else {
            res.status(400).send("Invalid query ID");
        }
    } else if (databaseType === "sql") {
        // Handle SQL database query
        // Redirect or process as needed
    } else if (databaseType === "neo4j") {
        // Handle Neo4j database query
        // Redirect or process as needed
    } else {
        res.status(400).send("Invalid database type");
    }
});


// load routes
const mongoRouter = require("./routes/mongo");
app.use("/mongo", mongoRouter);
const sqlRouter = require("./routes/sql");
app.use("/sql", sqlRouter);
const neo4jRouter = require("./routes/neo4j");
app.use("/neo4j", neo4jRouter);


app.listen(port, () => console.log(`Listening on port ${port}! (localhost:${port})`))
