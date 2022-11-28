const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BookService.getById(id);

  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(200).json(book);
};

const insertNewBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.insertNewBook({ title, author, pageQuantity });

  res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const update = await BookService.updateBook(id, { title, author, pageQuantity })

  if (!update) {
    return res.status(404).json({ message: 'Book not found'})
  }
  return res.status(201).json({ message: 'Book update'});
};

module.exports = {
  getAll,
  getById,
  insertNewBook,
  updateBook
};