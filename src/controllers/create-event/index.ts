import { InMemoryAccountRepository } from '../../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../../repositories/in-memory-event-repository'
import { CreateDepositUsecase } from '../../usecases/create-deposit-usecase'
import { CreateWithdrawUsecase } from '../../usecases/create-withdraw-usecase'
import { CreateEventController } from './create-event-controller'

const accountRepository = InMemoryAccountRepository.getInstance()
const eventRepository = InMemoryEventRepository.getInstance()

const createDepositUsecase = new CreateDepositUsecase(eventRepository, accountRepository)
const createWithdrawUsecase = new CreateWithdrawUsecase(eventRepository, accountRepository)

const createEventController = new CreateEventController(createDepositUsecase, createWithdrawUsecase)

export { createEventController }
