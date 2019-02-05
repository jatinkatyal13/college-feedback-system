const secrets = require('./secrets')

module.exports = {
  SERVER: {
    PORT: process.env.PORT || 3987,
  },
  DB: {
    DATABASE: secrets.DB.NAME,
    USERNAME: secrets.DB.USERNAME,
    PASSWORD: secrets.DB.PASSWORD,
    HOST: secrets.DB.HOST,
    SYNC_ALTER: process.env.DB_SYNC_ALTER || false,
    SYNC_FORCE: process.env.DB_SYNC_FORCE || false
  },
  SESSION: {
    SECRET: secrets.SESSION_SECRET
  }
}
