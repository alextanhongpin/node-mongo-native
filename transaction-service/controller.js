const ObjectId = require('mongodb').ObjectID

const TransactionController = ({ service }) => {
  return {
    async index (ctx, next) {
      const data = await service.findMany()
      ctx.body = {
        data
      }
    },
    async fetchOne (ctx, next) {
      const data = await service.findOne({ _id: ObjectId(ctx.params.id) })
      ctx.body = {
        data
      }
    }
  }
}

module.exports = TransactionController
