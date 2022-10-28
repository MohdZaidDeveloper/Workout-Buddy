const express = require("express");
const requireUser = require("../middleware/userMiddleware");

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
} = require("../controllers/workoutControllers");


const router = express.Router()

router.use(requireUser);


//Get all workout
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id", getWorkout);


//Post a new workout
router.post("/", createWorkout);


//Update a workout
router.patch("/:id", updateWorkout);


//Delete a workout
router.delete("/:id", deleteWorkout);



module.exports = router