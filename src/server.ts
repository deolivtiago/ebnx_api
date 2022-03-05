import cors from 'cors'
import express from 'express'
import { eventRoutes } from './routes/event-routes'

const PORT = 4000
const app = express()

app
  .use(express.json())
  .use(cors())
  .use(eventRoutes)
  .listen(PORT, () => console.log(`server running at http://localhost:${PORT}`))
