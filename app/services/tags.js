const tags=require("../models/tags")


module.exports={

     async find(){
        const alltags= await tags.find({}).lean()
        return alltags
     },


     async findOne(tagsId){
        const singletags= await tags.findById(tagsId).lean()
        return singletags
     },


     async update(tagsId, data){

        const updatetags= tags.findByIdAndUpdate(tagsId, data)
        return updatetags

     },


     async create(data){
const newtags = new tags(data)
await newtags.save()

return newtags
     },


     async delete(tagsId){
const deletetags= await tags.findOneAndDelete(tagsId)
return deletetags
     },
}

