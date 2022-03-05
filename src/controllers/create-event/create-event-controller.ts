import { Request, Response } from 'express'
import { CreateDepositUsecase } from '../../usecases/create-deposit-usecase'
import { CreateWithdrawUsecase } from '../../usecases/create-withdraw-usecase'

export class CreateEventController {
  constructor (
    private readonly _createDepositUsecase: CreateDepositUsecase,
    private readonly _createWithdrawUsecase: CreateWithdrawUsecase
  ) { }

  handle (request: Request, response: Response): Response {
    const { type, amount, origin, destination } = request.body

    if (type === 'deposit') {
      const json = this._createDepositUsecase.execute({ amount, destination })

      return response.status(201).json(json)
    }

    if (type === 'withdraw') {
      const json = this._createWithdrawUsecase.execute({ amount, origin })

      return json === -1 ? response.status(404).json(0) : response.status(201).json(json)
    }
  }
}
