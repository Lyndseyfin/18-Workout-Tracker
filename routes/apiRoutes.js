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

router.get("/api/workouts/range", ({body}, res) => {
  Workout.find(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// creating a workout
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
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// adding a exercise
router.put("/api/workouts/:id", ({body,params}, res) => {
  workout.findByIdAndUpdate(params.id, {$push:{exercises:body}})
    .then(data => res.json(data))
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.put('/api/workouts/:id', (req, res) => {
//   Workout.findOneAndUpdate(req.body, {
//     where: {
//       id: req.params.id
//     },
//   })
//     .then(dbWorkout => res.status(200).json(dbWorkout))
//     .catch(err => res.status(400).json(err))
// });




module.exports = router;
