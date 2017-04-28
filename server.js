var express = require('express');
var app = express();

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
  // if (req.protocol === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
    // res.redirect('http://' + req.hostname + req.originalUrl);
  }
});

app.use(express.static('public'));

// const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 3000;

// app.listen(PORT, IP, () => {
app.listen(PORT, () => {
  // console.log('Server is up on: ', IP, ':', PORT);
  console.log('Server is up on port: ', PORT);
});
