import { Router } from 'express'
import { route as feedbackRoute } from './feedback'

export const route = Router()

route.use((req, res, next) => {
  if (req.user) {
    res.locals.user = req.user
    res.locals.loggedIn = true
  }
  next()
})

route.use('/feedback', feedbackRoute)
route.use(feedbackRoute)
route.get('/', (req, res) => {
  res.render('pages/index')
})
