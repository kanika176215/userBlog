const {response} = require("express")
const express = require("express")
const app = express()       //function calling
const port=3000
const userRoutes=require("./app/routes/user")
const blogRoutes=require("./app/routes/blog")
const categoryRoutes=require("./app/routes/category")
const tagsRoutes=require("./app/routes/tags")
const commentsRoutes=require("./app/routes/comments")



// connect database
require("./app/database/connect")



//basic use
app.use(express.json())
app.use(userRoutes)
app.use(blogRoutes)
app.use(commentsRoutes)
app.use(tagsRoutes)
app.use(categoryRoutes)
app.use(userRoutes)
//routes


//routes
app.listen(3000,()=>{
    console.log(`server is running on ${port}`)
});