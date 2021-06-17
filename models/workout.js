const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter the name of an exercise."
    },
    day: {
        type: NDate,
        required: "Enter an amount"
      },
    
    
});