import { InMemoryAccountRepository } from '../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../repositories/in-memory-event-repository'

interface WithdrawData {
  amount: number
  origin: string
}

export class CreateWithdrawUsecase {
  constructor (
    private readonly _eventRepository: InMemoryEventRepository,
    private readonly _accountRepository: InMemoryAccountRepository
  ) { }

  execute ({ origin, amount }: WithdrawData): Object {
    const account = this._accountRepository.getAccount(origin)

    if (!account) {
      return -1
    }

    this._eventRepository.createWithdraw({ origin, amount })
    const updatedOrigin = this._accountRepository.updateAccountBalance(origin, account.balance - amount)

    return Object.assign({}, { origin: updatedOrigin })
  }
}
