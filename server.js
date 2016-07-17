var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Example app listening at http://localhost:%s', port);
});