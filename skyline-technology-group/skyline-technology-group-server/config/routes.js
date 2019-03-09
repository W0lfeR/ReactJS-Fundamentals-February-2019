const authRoutes = require('../routes/auth')
const computerRoutes = require('../routes/computer')
const statsRoutes = require('../routes/stats')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('/auth', authRoutes)
  app.use('/computer', computerRoutes)
  app.use('/stats', statsRoutes)
  app.use('/orders', ordersRoutes)
}
