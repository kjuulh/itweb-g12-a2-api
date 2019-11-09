import * as cors from 'cors'
import * as express from 'express'
import databaseConfig from './database.config'
import parserConfig from './parser.config'
import routesConfig from './routes.config'

export default function() {
  const app: express.Express = express()

  const originsWhitelist = [
    'http://localhost:4200',
    'https://itweb-g12-a2-app.herokuapp.com',
    'https://itweb-g12-a2-app.herokuapp.com/',
  ]

  const corsOptions = {
    origin: (origin, callback) => {
      if (originsWhitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not Allowed by CORS'))
      }
    },
  }

  app.use(cors(corsOptions))

  databaseConfig(app)
  parserConfig(app)
  routesConfig(app)

  return app
}
