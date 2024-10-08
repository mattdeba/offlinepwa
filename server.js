/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 80;


app.use('/', express.static(path.join(__dirname, 'dist', 'tfour')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'tfour', 'index.html'));
});

app.listen(port, () => console.log(`HTTP Server running on port ${port}`));
