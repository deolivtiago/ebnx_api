import { Event } from './event'

export class Withdraw extends Event {
  constructor (
    public readonly origin: string,
    amount: number,
    id?: string
  ) {
    super('withdraw', amount, id)
  }
}
