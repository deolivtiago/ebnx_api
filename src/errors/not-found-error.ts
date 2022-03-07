export class NotFoundError extends Error {
  constructor (param: string) {
    super(param)
    this.name = 'NotFoundError'
  }
}
