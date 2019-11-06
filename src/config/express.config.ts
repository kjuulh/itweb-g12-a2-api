import * as cors from 'cors'
import * as express from 'express'
import databaseConfig from './database.config'
import parserConfig from './parser.config'
import routesConfig from './routes.config'

export default function() {
  const app: express.Express = express()
  app.use(cors())

  databaseConfig(app)
  parserConfig(app)
  routesConfig(app)

  return app
}
