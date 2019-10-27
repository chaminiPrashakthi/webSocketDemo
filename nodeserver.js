var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Running Server Details.
var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("listening at Port", host, port)
});