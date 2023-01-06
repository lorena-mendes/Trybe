// src/server.js

require('dotenv').config();

const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`API Booksapi está sendo executada na porta ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});