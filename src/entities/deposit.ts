import { Event } from './event'

export class Deposit extends Event {
  constructor (
    private readonly destination: string,
    amount: number,
    id?: string
  ) {
    super('deposit', amount, id)
  }
}
