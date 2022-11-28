
const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
      where: { id },
      // include: [{ model: Address, as: 'addresses' }], com o número aparecendo 
      // include: [{
      //   model: Address, as: 'addresses', attributes: { exclude: ['number'] }, //sem aparecer o número
      // }],
    });
  return employee;
}

module.exports = {
  getAll,
  getById,
};