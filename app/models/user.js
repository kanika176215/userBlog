

const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },


    phoneNo: {
        type: String,
    },

});

const user = mongoose.model("user", userSchema);
module.exports = user