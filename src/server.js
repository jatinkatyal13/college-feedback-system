import express from 'express'
import flash from 'express-flash'
import hbs from 'express-hbs'
import session from 'express-session'
import path from 'path'
const config = require('../config.js')

import { passport } from './passport/setup'
import { route as pagesRoute } from './routes/'
import { ifcontains, ifeq } from './utils/handlebar-helpers'

const app = express()

// Setup HBS engine -------- start -------
app.engine(
  'hbs',
  hbs.express4({
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))
hbs.registerHelper('ifeq', ifeq)
hbs.registerHelper('ifcontains', ifcontains)
// Setup HBS engine -------- end -------

// Setup Body parsers -------- start -------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Setup Body parsers -------- end -------

// Setup Session and Passport ---------- start -----------
app.use(
  session({
    secret: config.SESSION.SECRET,
  }),
)
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
// Setup Session and Passport ---------- end -----------

app.use('/', express.static(path.join(__dirname, '../public')))
app.use('/', pagesRoute)

export { app }
