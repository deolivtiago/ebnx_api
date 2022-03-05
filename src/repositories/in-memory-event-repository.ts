import { Deposit } from '../entities/deposit'
import { Event } from '../entities/event'

interface DepositData {
  amount: number
  destination: string
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

  deleteAllEvents (): void {
    while (this._events.length) {
      this._events.pop()
    }
  }
}
