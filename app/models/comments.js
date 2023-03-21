

const mongoose= require('mongoose')
const { Schema } = mongoose;


const commentsSchema= new Schema({

    content:{
        type:String,
        required: true,
    },
    createdAt:{
        type:Date,
        default:new Date(),
    },
    modified:{
        type:Date,
        default: new Date()
    }
});

const comments = mongoose.model("comments", commentsSchema);
module.exports = comments