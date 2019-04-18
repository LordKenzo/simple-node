const express = require('express');
const path = require('path');
const routes = require('./routes');

const port = process.env.PORT || 3000;

const app = express();

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World from Azure and Git on Github 🦄!');
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
