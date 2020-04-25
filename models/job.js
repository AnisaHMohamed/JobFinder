const Sequelize = require("sequelize");
const db = require("../config/database");

const Job = db.define('gig', {
  title: {
    type: Sequelize.STRING
  },  
  technologies: {
    type: Sequelize.STRING
  },
    description: {
    type: Sequelize.STRING
  },
    contact_email: {
    type: Sequelize.STRING
  }
})

module.exports = Job