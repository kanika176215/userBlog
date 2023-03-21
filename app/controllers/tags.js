

const tagsService = require('../services/tags')

module.exports = {





    async find(req, res, next) {


        try {
            const result = await tagsService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },



    async findOne(req, res, next) {


     try {
        if (req.params && req.params.tagsId) {
            const result = await tagsService.findOne(req.params.tagsId)
            res.send(result)
        }
        else {
            res.status(400).send("tags id is reqired")
        }
        
     } catch (error) {


        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
        
     }





    },


    async update(req, res, next) {


    try {
        

    if (req.params && req.params.tagsId) {



            const result = await tagsService.update(req.params.tagsId, req.body)
            res.send(result)
        }

        else {
            res.status(400).send("tags id is required")
        }

    } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
    }
    },



    async create(req, res, next) {


     try {
        if (req.body) {
           

                const result = await tagsService.create(req.body)
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
        if (req.params && req.params.tagsId) {
            const result = await tagsService.delete(req.params.tagsId)
            res.send(result)

        }

        else {
            req.status(400).send("tags id is req")
        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }

    },

}