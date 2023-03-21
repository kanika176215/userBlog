

const mongoose= require('mongoose')
const { Schema } = mongoose;


const tagsSchema= new Schema({

    name:{
        type:String,
        required: true,
    },
    slug:{
        type:String,
        required:true,
    },
    createAt:{
        type: Date,
        default: new Date(),
    },
    modified:{
        type:Date,
        default: new Date()
    }
});

const tags = mongoose.model("tags", tagsSchema);
module.exports = tags