
const Router = require('koa-router')

const PREFIX = '/v1/transactions'

module.exports = ({ controller }) => {
  const route = new Router({
    prefix: PREFIX
  })

  route.get('/summary', controller.mapReduce)
  route.get('/', controller.findMany)
  route.get('/:id', controller.findOne)
  route.post('/', controller.createOne)
  route.delete('/:id', controller.deleteOne)

  return route
}
