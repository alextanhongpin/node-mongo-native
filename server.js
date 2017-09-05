const Koa = require('koa')
const MongoClient = require('mongodb').MongoClient

const app = new Koa()
const Transaction = require('./transaction-service')

const url = process.env.MONGO_URI
const port = process.env.PORT

async function main () {
  const db = await MongoClient.connect(url)
  const transaction = Transaction({ db })

  app
  .use(transaction.routes())
  .use(transaction.allowedMethods())

  app.listen(port)
  console.log(`listening to port *:${port}`)
}

main()
