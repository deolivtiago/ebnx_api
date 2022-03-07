import { InMemoryAccountRepository } from '../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../repositories/in-memory-event-repository'

interface DepositData {
  amount: number
  destination: string
}

export class CreateDepositUsecase {
  constructor (
    private readonly _eventRepository: InMemoryEventRepository,
    private readonly _accountRepository: InMemoryAccountRepository
  ) { }

  execute ({ destination, amount }: DepositData): Object {
    let account = this._accountRepository.getAccount(destination)

    if (!account) {
      account = this._accountRepository.createAccount(destination)
    }

    this._eventRepository.createDeposit({ destination, amount })
    const updatedDestination = this._accountRepository.updateAccountBalance(destination, amount + account.balance)

    return { destination: updatedDestination }
  }
}
