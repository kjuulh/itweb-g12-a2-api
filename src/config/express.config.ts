import * as cors from 'cors'
import * as express from 'express'
import databaseConfig from './database.config'
import parserConfig from './parser.config'
import routesConfig from './routes.config'

export default function() {
  const app: express.Express = express()

  databaseConfig(app)
  parserConfig(app)
  routesConfig(app)

  const originsWhitelist = [
    'http://localhost:4200',
    'https://itweb-g12-a2-app.herokuapp.com',
  ]

  const corsOptions = {
    origin: (origin, callback) => {
      let isWhitelisted = originsWhitelist.indexOf(origin) !== -1
      callback(null, isWhitelisted)
    },
    credentials: true,
  }

  app.use(cors(corsOptions))

  return app
}
