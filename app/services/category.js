const category=require("../models/category")


module.exports={

     async find(){
        const allcategorys= await category.find({}).lean()
        return allcategorys
     },


     async findOne(categoryId){
        const singlecategory= await category.findById(categoryId).lean()
        return singlecategory
     },


     async update(categoryId, data){

        const updatecategory= category.findByIdAndUpdate(categoryId, data)
        return updatecategory

     },


     async create(data){
const newcategory = new category(data)
await newcategory.save()

return newcategory
     },


     async delete(categoryId){
const deletecategory= await category.findOneAndDelete(categoryId)
return deletecategory
     },
}