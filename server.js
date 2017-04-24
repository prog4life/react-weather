var express = require('express');
var app = express();

app.use(express.static('public'));

var IP = process.env.IP || 'localhost';
var PORT = process.env.PORT || 3000;

app.listen(PORT, IP, () => {
  console.log('Server is up on: ', IP, ':', PORT);
});
