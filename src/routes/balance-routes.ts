import { Router } from 'express'
import { getBalanceController } from '../controllers/get-balance'

const balanceRoutes = Router()

balanceRoutes
  .get('/balance', (request, response) => getBalanceController.handle(request, response))

export { balanceRoutes }
