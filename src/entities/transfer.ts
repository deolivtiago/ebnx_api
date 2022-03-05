import { Event } from './event'

export class Transfer extends Event {
  constructor (
    public readonly origin: string,
    public readonly destination: string,
    amount: number,
    id?: string
  ) {
    super('transfer', amount, id)
  }
}
