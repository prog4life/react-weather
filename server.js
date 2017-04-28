var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log("req.headers['x-forwarded-proto']: ",
  req.headers['x-forwarded-proto']);
  console.log('req.protocol: ', req.protocol);
  console.log('req.secure: ', req.secure);
  console.log('req.hostname: ', req.hostname);
  console.log('req.url: ', req.url);
  console.log('req.originalUrl: ', req.originalUrl);

  if (req.headers['x-forwarded-proto'] === 'http') {
  // get wrong 'http' value of req.protocol in Heroku, while 'https' is expected
  // if (req.protocol === 'http') {  // for 'localhost'
    next();
  } else {
    res.redirect('http://' + req.hostname + req.originalUrl);  // or req.url
    // res.redirect('http://' + req.hostname + ':' +
    // (process.env.PORT || 3000) + req.url);  // for 'localhost'
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
