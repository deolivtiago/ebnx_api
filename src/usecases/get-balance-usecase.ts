import { InMemoryAccountRepository } from '../repositories/in-memory-account-repository'

export class GetBalanceUsecase {
  constructor (private readonly _accountRepository: InMemoryAccountRepository) { }

  execute (id: string): number {
    const account = this._accountRepository.getAccount(id)

    if (!account) {
      return -1
    }

    return account.balance
  }
}
