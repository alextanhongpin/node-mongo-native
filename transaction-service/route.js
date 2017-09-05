
const Router = require('koa-router')

const PREFIX = '/v1/transactions'

module.exports = ({ controller }) => {
  const route = new Router({
    prefix: PREFIX
  })

  route.get('/', controller.index)
  route.get('/:id', controller.fetchOne)

  return route
}
