import { Router } from 'express'
import { createEventController } from '../controllers/create-event'

const eventRoutes = Router()

eventRoutes
  .post('/event', (request, response) => createEventController.handle(request, response))

export { eventRoutes }
