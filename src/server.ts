import cors from 'cors'
import express from 'express'
import { indexRoutes } from './routes/index.routes'

const PORT = 4000
const app = express()

app
  .use(express.json())
  .use(cors())
  .use(indexRoutes)
  .listen(PORT, () => console.log(`server running at http://localhost:${PORT}`))
