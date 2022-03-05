import { Deposit } from '../entities/deposit'
import { Event } from '../entities/event'
import { Withdraw } from '../entities/withdraw'

interface DepositData {
  amount: number
  destination: string
}

interface WithdrawData {
  amount: number
  origin: string
}

export class InMemoryEventRepository {
  private constructor (private readonly _events: Event[] = []) { }

  public static INSTANCE: InMemoryEventRepository

  public static getInstance (): InMemoryEventRepository {
    if (!InMemoryEventRepository.INSTANCE) {
      InMemoryEventRepository.INSTANCE = new InMemoryEventRepository()
    }

    return InMemoryEventRepository.INSTANCE
  }

  createDeposit ({ amount, destination }: DepositData): Event {
    const event = new Deposit(
      destination,
      amount
    )

    this._events.push(event)

    return event
  }

  createWithdraw ({ amount, origin }: WithdrawData): Event {
    const event = new Withdraw(
      origin,
      amount
    )

    this._events.push(event)

    return event
  }

  deleteAllEvents (): void {
    while (this._events.length) {
      this._events.pop()
    }
  }
}
