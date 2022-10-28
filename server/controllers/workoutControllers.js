const Workout = require("../models/workoutModel");





//get all workout
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  try {
    const workoutsData = await Workout.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(workoutsData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get a single workout
const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findById({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//create new workout
const createWorkout = async (req, res) => {
  const {title, load,reps} = req.body;
  
  try {
    const user_id = req.user._id;
    const newWorkout = new Workout({title,load,reps, user_id});
    const workout = await newWorkout.save();
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//update a workout
const updateWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndUpdate({ _id: id },req.body, {new:true});
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndDelete({ _id: id });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
