import { InMemoryAccountRepository } from '../../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../../repositories/in-memory-event-repository'
import { CreateDepositUsecase } from '../../usecases/create-deposit-usecase'
import { CreateEventController } from './create-event-controller'

const accountRepository = new InMemoryAccountRepository()
const eventRepository = new InMemoryEventRepository()

const createDepositUsecase = new CreateDepositUsecase(eventRepository, accountRepository)

const createEventController = new CreateEventController(createDepositUsecase)

export { createEventController }
