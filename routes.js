const routes = module.exports = require('next-routes')()

routes
  .add('committees', '/committees/:id')
  .add('politicians', '/politicians/:id')
  .add('parties', '/parties/:id')
