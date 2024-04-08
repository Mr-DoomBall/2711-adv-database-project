const express = require("express");
const router = express.Router();
require("../public/mongoDBpipelines.js");


router.get("/query1", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query1"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query2", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query2"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query3", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query3"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query4", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query4"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query5", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query5"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query6", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query6"], {allowDiskUse: true}).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query7", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query7"], { allowDiskUse: true }).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});

router.get("/query8", function (req, res) {
    const collection = req.app.locals.collection;
    collection.aggregate(mongoDBpipelines["query8"], { allowDiskUse: true }).toArray()
        .then(function (results) {
            //res.status(200).json(results);
            //console.log(results);
            status = "200 OK";
            res.render("mongo", {
                data: results
            }, function (err, html) {
                res.send(html);
            });
        })
});
module.exports = router;
