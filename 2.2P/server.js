const express = require('express');
const path = require('path');
const scripts = require('./public/js/scripts');

const app = express();
const PORT = 3000;

app.get('/', scripts.home);
app.get('/add', scripts.add);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
