var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
var server_port = process.env.PORT || 5500;
http.listen(server_port);
