module.exports = ({ db }) => {
  const service = require('./service')({ db })
  const controller = require('./controller')({ service })
  const route = require('./route')({ controller })
  return route
}
