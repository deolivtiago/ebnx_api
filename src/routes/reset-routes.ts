import { Router } from 'express'
import { deleteDataController } from '../controllers/delete-data'

const resetRoutes = Router()

resetRoutes
  .post('/', (request, response) => deleteDataController.handle(request, response))

export { resetRoutes }
