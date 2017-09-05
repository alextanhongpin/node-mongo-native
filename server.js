const Koa = require('koa')

const app = new Koa()
const service = require('./service')

service.transaction.findMany().then((data) => {
  console.log('data', data)
})

const port = process.env.PORT

app.listen(port)
console.log(`listening to port *:${port}`)
