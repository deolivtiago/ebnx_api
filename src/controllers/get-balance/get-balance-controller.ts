import { Request, Response } from 'express'
import { NotFoundError } from '../../errors/not-found-error'
import { GetBalanceUsecase } from '../../usecases/get-balance-usecase'

export class GetBalanceController {
  constructor (private readonly _getBalanceUsecase: GetBalanceUsecase) { }

  handle (request: Request, response: Response): Response {
    const { account_id: id } = request.query
    let result = { status: 500, json: { } }

    try {
      const balance = this._getBalanceUsecase.execute(String(id))

      result = { status: 200, json: balance }
    } catch (e) {
      if (e instanceof NotFoundError) {
        result = { status: 404, json: 0 }
      }
    }

    return response.status(result.status).json(result.json)
  }
}
