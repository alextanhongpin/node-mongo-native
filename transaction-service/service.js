class Transaction {
  constructor ({ db }) {
    this.db = db
    this.collection = 'transactions'
  }
  async findMany (params) {
    const results = await this.db.collection(this.collection).find().toArray()
    return results
  }
  async findOne (params) {
    const results = await this.db.collection(this.collection).findOne(params)
    return results
  }
  async insertOne (params) {
    const ok = await this.db.collection(this.collection).insertOne(params)
    return ok
  }
  async deleteOne (params) {
    const ok = await this.db.collection(this.collection).deleteOne(params)
    return ok
  }
  async mapReduce (params) {
    const map = function () {
      emit(this.name, this.price)
    }

    const reduce = function (key, values) {
      return Array.sum(values)
    }
    const options = {
    //   query: {
    //     name:
    //   },
      out: {
        inline: 1
      },
      include_statistics: true,
      verbose: true
    }
    const ok = await this.db.collection(this.collection).mapReduce(map, reduce, options)
    return ok
  }
}

module.exports = ({ db }) => {
  return new Transaction({ db })
}
