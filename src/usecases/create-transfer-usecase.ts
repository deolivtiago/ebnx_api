import { NotFoundError } from '../errors/not-found-error'
import { InMemoryAccountRepository } from '../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../repositories/in-memory-event-repository'

interface TransferData {
  amount: number
  origin: string
  destination: string
}

export class CreateTransferUsecase {
  constructor (
    private readonly _eventRepository: InMemoryEventRepository,
    private readonly _accountRepository: InMemoryAccountRepository
  ) { }

  execute ({ amount, origin, destination }: TransferData): Object {
    const originAccount = this._accountRepository.getAccount(origin)
    let destinationAccount = this._accountRepository.getAccount(destination)

    if (!originAccount) {
      throw new NotFoundError('origin')
    }

    if (!destinationAccount) {
      this._accountRepository.createAccount(destination)
      destinationAccount = this._accountRepository.getAccount(destination)
    }

    this._eventRepository.createTransfer({ origin, destination, amount })
    const updatedOrigin = this._accountRepository.updateAccountBalance(origin, originAccount.balance - amount)
    const updatedDestination = this._accountRepository.updateAccountBalance(destination, destinationAccount.balance + amount)

    return { origin: updatedOrigin, destination: updatedDestination }
  }
}
