const express = require('express');

const app = express();

const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
  console.log(err);

  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log('Server started');
});
