import { Router } from 'express'

export const route = Router() 

route.get('/login', (req, res) => {
  res.send("OK")
})