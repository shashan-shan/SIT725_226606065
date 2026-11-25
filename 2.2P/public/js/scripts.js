const path = require('path');

const home = (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
};

const add = (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({error: 'Both a and b must be valid numbers'});
  }

  const result = a + b;
  res.json({ a, b, result });
};

module.exports = { home, add };