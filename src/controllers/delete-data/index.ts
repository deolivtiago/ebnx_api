import { InMemoryAccountRepository } from '../../repositories/in-memory-account-repository'
import { InMemoryEventRepository } from '../../repositories/in-memory-event-repository'
import { DeleteDataController } from './delete-data-controller'

const accountRepository = InMemoryAccountRepository.getInstance()
const eventRepository = InMemoryEventRepository.getInstance()

const deleteDataController = new DeleteDataController(accountRepository, eventRepository)

export { deleteDataController }
