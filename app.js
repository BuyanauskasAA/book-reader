const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'books/001.mp3'));
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
