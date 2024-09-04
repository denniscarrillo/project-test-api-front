import express from 'express'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import userRoutes from './routes/users.routes.js'

const app = express()
app.use(cors())
app.use(indexRoutes)
app.use(userRoutes)

export default app
