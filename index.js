var express = require('express');

var app = express();



var server = app.listen(8080, function(){

});
app.use(express.static(__dirname + '/public'));
