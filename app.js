var express = require('express');
var app = express();

var port = parseInt(process.env.PORT, 10) || 8080;

app.use('/public', express.static(__dirname + '/public'));

app.get("/", function (request, response) {
	response.sendfile("index.html");
});

app.use(function (request, response, next) {
    if (request.path.substring(0, 3) == "/u/")
    {
        response.end("user page")
    }
    else if (request.path.substring(0, 3) == "/c/")
    {
        response.end("comment page")
    }
})

app.listen(port);

console.log("Now listening on port " + port);