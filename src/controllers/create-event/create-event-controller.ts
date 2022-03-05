import { Request, Response } from 'express'
import { CreateDepositUsecase } from '../../usecases/create-deposit-usecase'

export class CreateEventController {
  constructor (private readonly _createDepositUsecase: CreateDepositUsecase) { }

  handle (request: Request, response: Response): Response {
    const { type, amount, destination } = request.body

    if (type === 'deposit') {
      const json = this._createDepositUsecase.execute({ amount, destination })

      return response.status(201).json(json)
    }
  }
}
