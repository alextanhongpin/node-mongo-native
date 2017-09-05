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
    console.log('findone', params, results)
    return results
  }
  async create (params) {
    const ok = await this.db.collection(this.collection).insert(params)
    return ok
  }
}

module.exports = ({ db }) => {
  return new Transaction({ db })
}
