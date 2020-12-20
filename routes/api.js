// Dependencies
const Workout = require("../models");

// Routes
module.exports = function (app) {
    // Gets all workouts
    app.get("/api/workouts/", function (req, res) {
        Workout.findAll({})
            .then(function (data) {
                res.json(data)
            });
    });

    // Gets workout by range
    app.get("/api/workouts/range", function (req, res) {
        Workout.findAll({
            where: {
                range: req.params.range
            }
        })
            .then(function (data) {
                res.json(data)
            });
    });

    // Route to save a new workout
    app.post("/api/workouts", function (req, res) {
        console.log(req.body);
        Workout.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        })
            .then(function (data) {
                res.json(data);
            });
    });

    // PUT route for continuing workout
    app.put("/api/workouts", function (req, res) {
        Workout.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (data) {
                res.json(data);
            });
    });

};
