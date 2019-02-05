import { Router } from 'express'

export const route = Router()

route.get('/', (req, res) => {
  res.render('pages/feedback/index')
})
