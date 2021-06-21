const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter exrcise name."
      },
      type: {
        type: String,
        trim: true,
        required: "Enter type of exercise (ie. cardio, cycling)."
      },
      weight: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 0,
        required: "Duration is required."
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;