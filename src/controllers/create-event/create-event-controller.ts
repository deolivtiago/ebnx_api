import { Request, Response } from 'express'
import { NotFoundError } from '../../errors/not-found-error'
import { CreateDepositUsecase } from '../../usecases/create-deposit-usecase'
import { CreateTransferUsecase } from '../../usecases/create-transfer-usecase'
import { CreateWithdrawUsecase } from '../../usecases/create-withdraw-usecase'

export class CreateEventController {
  constructor (
    private readonly _createDepositUsecase: CreateDepositUsecase,
    private readonly _createWithdrawUsecase: CreateWithdrawUsecase,
    private readonly _createTransferUsecase: CreateTransferUsecase
  ) { }

  handle (request: Request, response: Response): Response {
    const { type, amount, origin, destination } = request.body
    let result = { status: 500, json: { } }

    try {
      switch (type) {
        case 'deposit':
          result = { status: 201, json: this._createDepositUsecase.execute({ amount, destination }) }
          break
        case 'withdraw':
          result = { status: 201, json: this._createWithdrawUsecase.execute({ amount, origin }) }
          break
        case 'transfer':
          result = { status: 201, json: this._createTransferUsecase.execute({ amount, origin, destination }) }
          break
      }
    } catch (e) {
      if (e instanceof NotFoundError) {
        result = { status: 404, json: 0 }
      }
    }

    return response.status(result.status).json(result.json)
  }
}
