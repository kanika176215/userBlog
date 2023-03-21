

const blogService = require('../services/blog')

module.exports = {





    async find(req, res, next) {


        try {
            const result = await blogService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },



    async findOne(req, res, next) {


     try {
        if (req.params && req.params.blogId) {
            const result = await blogService.findOne(req.params.blogId)
            res.send(result)
        }
        else {
            res.status(400).send("Blog id is reqired")
        }
        
     } catch (error) {


        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
        
     }





    },


    async update(req, res, next) {


    try {
        

    if (req.params && req.params.blogId) {



            const result = await blogService.update(req.params.blogId, req.body)
            res.send(result)
        }

        else {
            res.status(400).send("blog id is required")
        }

    } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
    }
    },



    async create(req, res, next) {


     try {
        if (req.body) {
        

                const result = await blogService.create(req.body)
                res.send(result)
    }
        else {
            res.status(400).send("data is required")

        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }
    },




    async delete(req, res, next) {
     try {
        if (req.params && req.params.blogId) {
            const result = await blogService.delete(req.params.blogId)
            res.send(result)

        }

        else {
            req.status(400).send("blog id is req")
        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }

    },

}