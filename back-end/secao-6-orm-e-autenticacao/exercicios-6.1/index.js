const express = require('express');
const BooksController = require('./src/controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/books/:id', BooksController.getById);

app.post('/books', BooksController.insertNewBook);

app.put('/books/:id', BooksController.updateBook);

app.delete('/books/:id', BooksController.deleteBook);


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));