'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require("../data/products.json")
    data.forEach((el) => {
      el.updatedAt = new Date()
      el.createdAt = new Date()
      parseFloat(el.price)
    })
    
   await queryInterface.bulkInsert("Products", data, {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Products', null, {});
  }
};
