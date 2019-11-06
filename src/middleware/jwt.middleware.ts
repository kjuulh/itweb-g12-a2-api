import * as jwt from 'express-jwt'
import * as pathToRegexp from 'path-to-regexp'
import Config from '../config/config'

const jwtMiddleware = () => {
  const { secret } = JSON.parse(Config.secret)
  return jwt({ secret }).unless({
    path: [
      { url: pathToRegexp('/authenticate'), methods: ['POST'] },
      { url: pathToRegexp('/register'), methods: ['POST'] },
      { url: pathToRegexp('/users'), methods: ['GET'] },
      { url: pathToRegexp('/workouts'), methods: ['GET'] },
      { url: pathToRegexp('/workouts/:workoutId'), methods: ['GET'] },
      { url: pathToRegexp('/users/id/:userId'), methods: ['GET'] },
    ],
  })
}

export default jwtMiddleware
