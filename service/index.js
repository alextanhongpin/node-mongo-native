const database = require('../database')
const Transaction = require('./transaction')

module.exports = {
  transaction: Transaction({ connect: database })
}
