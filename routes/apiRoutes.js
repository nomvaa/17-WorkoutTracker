const db = require("../models");

module.exports = function(app) {

    // api get lastworkout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // create workout in db
    app.post("/api/workouts", async (req, res)=> {
        db.Workout.create({}).then(dbWorkout => {
            res.json(dbWorkout)
        }).catch((err) => {
            res.status(400).json(err);
        })
    })

    // add and update workout
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch((err) => {
            res.status(400).json(err)
        })
            
    })

    // Used by api.js to getWorkoutsInRange()
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
};