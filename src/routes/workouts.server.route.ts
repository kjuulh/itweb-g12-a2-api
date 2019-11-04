import { Express } from 'express'
import { workoutsController } from '../controllers/workout.server.controller'

export default class WorkoutRoute {
  constructor(app: Express) {
    app.route('/workouts').get(workoutsController.index)
    app.route('/workouts/mine').get(workoutsController.myWorkouts)
    app.route('/workouts').post(workoutsController.createWorkout)
    app.route('/workouts/:workoutId').get(workoutsController.getWorkout)
    app.route('/workouts/:workoutId/put').post(workoutsController.changeWorkout)
  }
}
