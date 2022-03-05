import { Deposit } from '../entities/deposit'
import { Event } from '../entities/event'

interface DepositData {
  amount: number
  destination: string
}

export class InMemoryEventRepository {
  constructor (private readonly _events: Event[] = []) { }

  createDeposit ({ amount, destination }: DepositData): Event {
    const event = new Deposit(
      destination,
      amount
    )

    this._events.push(event)

    return event
  }
}
