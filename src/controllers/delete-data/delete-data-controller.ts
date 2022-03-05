import { Request, Response } from 'express'
import { InMemoryAccountRepository } from '../../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../../repositories/in-memory-event-repository'

export class DeleteDataController {
  constructor (
    private readonly _accountRepository: InMemoryAccountRepository,
    private readonly _eventRepository: InMemoryEventRepository
  ) { }

  handle (request: Request, response: Response): Response {
    this._accountRepository.deleteAllAccounts()
    this._eventRepository.deleteAllEvents()

    return response.status(200).send('OK')
  }
}
