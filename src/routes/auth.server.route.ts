import { Express } from 'express'
import passport = require('passport')
import { authController } from '../controllers/auth.server.controller'
import * as cors from 'cors'

export default class AuthRoutes {
  constructor(app: Express) {
    app.route('/authenticate').post(cors(), authController.authenticate)
    app.route('/register').post(cors(), authController.register)
    app.route('/users').get(cors(), authController.getAll)
    app.route('/users/id/:userId').get(cors(), authController.getById)
  }
}
