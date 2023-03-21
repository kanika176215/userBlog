const blog=require("../models/blog")


module.exports={

     async find(){
        const allBlog= await blog.find({}).lean()
        return allBlog
     },


     async findOne(blogId){
        const singleBlog= await blog.findById(blogId).lean()
        return singleBlog
     },


     async update(blogId, data){

        const updateBlog= blog.findByIdAndUpdate(blogId, data)
        return updateBlog

     },


     async create(data){
const newBlog = new blog(data)
await newBlog.save()

return newBlog
     },


     async delete(blogId){
const deleteBlog= await blog.findOneAndDelete(blogId)
return deleteBlog
     },
}