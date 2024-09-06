const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 80;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});