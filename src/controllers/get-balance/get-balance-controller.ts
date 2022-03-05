import { Request, Response } from 'express'
import { GetBalanceUsecase } from '../../usecases/get-balance-usecase'

export class GetBalanceController {
  constructor (private readonly _getBalanceUsecase: GetBalanceUsecase) { }

  handle (request: Request, response: Response): Response {
    const { account_id: id } = request.query

    const balance = this._getBalanceUsecase.execute(String(id))

    return balance === -1 ? response.status(404).json(0) : response.status(200).json(balance)
  }
}
