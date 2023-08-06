const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', function (req, res, next) {
  // Handle the get for this route
  res.send('Welcome to CORS server 😁');
});

app.get('/cors', (req, res, next) => {
  res.send('This has CORS enabled 🎈');
});

app.post('/', function (req, res, next) {
  // Handle the post for this route
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
