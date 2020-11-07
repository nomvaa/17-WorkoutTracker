const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        type: {
          type: String,
          trim: true,
          required: "Enter exercise type"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
          type: Number
        },
        duration: {
            type: Number,
            required: "Enter exercise duration"
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// Show total workout time
workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;