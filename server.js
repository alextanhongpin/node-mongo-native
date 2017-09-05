const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/demo'
const connection = MongoClient.connect(url)
