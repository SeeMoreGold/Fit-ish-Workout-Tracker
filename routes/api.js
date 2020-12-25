// Dependencies
const Workout = require("../models/workout.js");
const router = require("express").Router();

// Routes

router.get("/api/workouts/", function (req, res) {
    Workout.find({})
        .then(function (data) {
            res.json(data)
        });
});

router.get("/api/workouts/range", function (req, res) {
    Workout.find({
        where: {
            range: req.params.range
        }
    })
        .then(function (data) {
            res.json(data)
        });
});

router.post("/api/workouts", function (req, res) {
    console.log(req.body);
    Workout.create({
    })
        .then(function (data) {
            res.json(data);
        });
});

// PUT route for continuing workout
router.put("/api/workouts/:id", ({ params, body }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } }
    )
        .then(function (data) {
            res.json(data);
        });
});

module.exports = router;

