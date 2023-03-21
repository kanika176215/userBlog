const comments=require("../models/comments")


module.exports={

     async find(){
        const allcomments= await comments.find({}).lean()
        return allcomments
     },


     async findOne(commentsId){
        const singlecomments= await comments.findById(commentsId).lean()
        return singlecomments
     },


     async update(commentsId, data){

        const updatecomments= comments.findByIdAndUpdate(commentsId, data)
        return updatecomments

     },


     async create(data){
const newcomments = new comments(data)
await newcomments.save()

return newcomments
     },


     async delete(commentsId){
const deletecomments= await comments.findOneAndDelete(commentsId)
return deletecomments
     },
}