import { Request, Response, Router } from 'express'

const indexRoutes = Router()

indexRoutes
  .get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' })
  })

export { indexRoutes }
