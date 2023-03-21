const user = require("../models/user")


module.exports = {

   async find() {
      const alluser = await user.find({}).lean()
      return alluser
   },


   async findOne(userId) {
      const singleuser = await user.findById(userId).lean()
      return singleuser
   },


   async update(userId, data) {

      const updateuser = user.findByIdAndUpdate(userId, data)
      return updateuser

   },


   async create(data) {
      const newuser = new user(data)
      await newuser.save()

      return newuser
   },


   async delete(userId) {
      const deleteuser = await user.findByIdAndDelete(userId)
      return deleteuser
   },
}