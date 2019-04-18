const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Azure and Git on Github 🦄!');
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
