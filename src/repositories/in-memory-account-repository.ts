import { Account } from '../entities/account'

export class InMemoryAccountRepository {
  constructor (private readonly _accounts: Account[] = []) { }

  createAccount (id?: string): Account {
    const nextId = this._accounts.length + 1
    const account = new Account(0, id || nextId.toString())

    this._accounts.push(account)

    return account
  }

  getAccount (id: string): Account {
    return this._accounts.find((account) => account.id === id)
  }

  updateAccountBalance (id: string, balance: number): Account {
    const account = this.getAccount(id)

    if (account) {
      Object.assign(account, { balance })
    }

    return account
  }
}
