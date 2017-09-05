class Transaction {
  constructor ({ connect }) {
    this.connect = connect
    this.collection = 'transactions'
  }
  async findMany (params) {
    const db = await this.connect
    const cursor = await db.collection(this.collection).find({})
    return new Promise((resolve, reject) => {
      let docs = []
      cursor.each((error, doc) => {
        if (error) {
          console.log(error)
        }
        if (!doc) {
          console.log('no documents found')
          return
        }
        docs.push(doc)
        console.log('found doc', doc)
      })
      resolve(docs)
    })
  }
}

module.exports = ({ connect }) => {
  return new Transaction({ connect })
}
