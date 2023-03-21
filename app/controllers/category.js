

const categoryService = require('../services/category')

module.exports = {





    async find(req, res, next) {


        try {
            const result = await categoryService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },



    async findOne(req, res, next) {


     try {
        if (req.params && req.params.categoryId) {
            const result = await categoryService.findOne(req.params.categoryId)
            res.send(result)
        }
        else {
            res.status(400).send("category id is reqired")
        }
        
     } catch (error) {


        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
        
     }





    },


    async update(req, res, next) {


    try {
        

    if (req.params && req.params.categoryId) {



            const result = await categoryService.update(req.params.categoryId, req.body)
            res.send(result)
        }

        else {
            res.status(400).send("category id is required")
        }

    } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
    }
    },



    async create(req, res, next) {


     try {
        if (req.body) {
         

                const result = await categoryService.create(req.body)
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
        if (req.params && req.params.categoryId) {
            const result = await categoryService.delete(req.params.categoryId)
            res.send(result)

        }

        else {
            req.status(400).send("category id is req")
        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }

    },

}