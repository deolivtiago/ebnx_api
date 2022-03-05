import { InMemoryAccountRepository } from '../../repositories/in-memory-account-repository'
import { GetBalanceUsecase } from '../../usecases/get-balance-usecase'
import { GetBalanceController } from './get-balance-controller'

const accountRepository = InMemoryAccountRepository.getInstance()

const getBalanceUsecase = new GetBalanceUsecase(accountRepository)

const getBalanceController = new GetBalanceController(getBalanceUsecase)

export { getBalanceController }
