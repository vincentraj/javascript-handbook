var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Example app listening at http://localhost:%s', port);
});