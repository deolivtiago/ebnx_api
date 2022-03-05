export abstract class Event {
  constructor (
    public readonly type: string,
    public readonly amount: number,
    public readonly id?: string
  ) { }
}
