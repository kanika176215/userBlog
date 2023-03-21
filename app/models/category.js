


const mongoose= require('mongoose')
const { Schema } = mongoose;


const categorySchema= new Schema({

    name:{
        type:String,
        required: true,
    },
    slugs:{
        type:String,
        required:true,
        lowercase:true,
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

const category= mongoose.model("category", categorySchema);
module.exports = category