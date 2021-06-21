const router = require("express").Router();
const Workout = require("../models/Workouts");


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  console.log(Workout);

  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkouts => {
//       res.json(dbWorkouts);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
router.put("/api/workouts/:id", (req, res)=>{
  workout.findByIdAndUpdate(
      req.params.id,
      {$push : {exercises: req.body}}
  )
  .then( results=> res.json(results))
  .catch(err=> res.json(err))
});



module.exports = router;
