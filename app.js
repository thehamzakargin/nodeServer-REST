const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
const app = express();
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Acces-Control-Allow-Origin', '*');
});
res.setHeader('Acces-Control-Allow-Origin', 'GET, POST, PUT, PATCH, DELETE');
res.setHeader('Acces-Control-Allow-Origin', 'Content-Type, Authorization');
next();
app.use('/feed', feedRoutes);
app.listen(7070);
