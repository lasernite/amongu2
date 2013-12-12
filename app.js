var express = require('express');
var app = express();

app.get("/", function (request, response) {
	response.end("hello world!");
});

app.listen(8080);
