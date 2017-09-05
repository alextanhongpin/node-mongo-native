const ObjectId = require('mongodb').ObjectID

const TransactionController = ({ service }) => {
  return {
    async findMany (ctx, next) {
      const data = await service.findMany()
      ctx.body = {
        data
      }
    },
    async findOne (ctx, next) {
      const data = await service.findOne({ _id: ObjectId(ctx.params.id) })
      ctx.body = {
        data
      }
    },
    async createOne (ctx, next) {
      const data = await service.insertOne({
        name: 'car',
        price: -50 + Math.random() * 100
      })
      ctx.body = {
        data
      }
    },
    async deleteOne (ctx, next) {
      const data = await service.deleteOne({ _id: ObjectId(ctx.params.id) })
      ctx.body = {
        data
      }
    },
    async mapReduce (ctx, next) {
      const data = await service.mapReduce()
      ctx.body = {
        data
      }
    }
  }
}

module.exports = TransactionController
