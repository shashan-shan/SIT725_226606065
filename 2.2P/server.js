const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Sum calculation API
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Both a and b must be valid numbers' });
  }

  const result = a + b;
  res.json({ a, b, result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
