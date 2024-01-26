const express = require("express");
const router = express.Router();

//bring the controller here

const controller = require("../../controllers/workout_controller");

//our router here is fully responsible for handling our requests
// what are ppssible CRUD requests,(get, post, patch, delete)
// 1. get all workouts
//2. get an existing workoout by id
// 3. create a new workout
// 4. delete a workout
// 5. delete all workouts
// when all these requests are made, responses are brought back
// the router sending requests and receiving responses, there are background
// things that goes on and that's what we are about to explore
// the controller and service layer has a role to play so that when the router sends
// a request, the same router can receive responses perperper

//get all workouts meaning we get from the root all workout

// I have used the controller method in my router
router.get("/", controller.getallworkouts);

// we get an existing workout by fetching from the /workoutID endpoint so we can get it
router.get("/:workoutId", controller.getanexistingworkout);

// we post a whole complete package workout
router.post("/", controller.createnewworkout);

// we update a particular workout
router.patch("/:workoutId", controller.updateoneworkout);

// we delete a complete packagee workout so we identify at the root
router.delete("/", controller.deleteoneworkout);

module.exports = router;