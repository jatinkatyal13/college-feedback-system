import debug from 'debug'
import { db } from './db'
import { app } from './server'
const config = require('../config.js')

const log = debug('server:run')

db.sync({
  alter: config.DB.SYNC_ALTER,
  force: config.DB.SYNC_FORCE,
}).then(() => {
  app.listen(config.SERVER.PORT, () => {
    log(`Server started on http://localhost:${config.SERVER.PORT}`)
  })
})
