const MongoClient = require('mongodb').MongoClient

const url = process.env.MONGO_URI
console.log('connecting to database')
const connection = MongoClient.connect(url)

module.exports = connection
