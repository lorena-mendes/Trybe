const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const insertNewBook = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({ title, author, pageQuantity });
  return book;
};

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [update] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id }},
  );
  return update;
};

const deleteBook = async (id) => {
  const remove = await Book.destroy(
    { where: { id } },
  );
  return remove;
};

module.exports = {
  getAll,
  getById,
  insertNewBook,
  updateBook,
  deleteBook,
};