

const userService = require('../services/user')

module.exports = {





    async find(req, res, next) {


        try {
            const result = await userService.find()



            res.send(result)
            
        } catch (error) {

            console.log("error",error)
            res.status(500).send("internal Sever Error")
            
        }
    
    },



    async findOne(req, res, next) {


     try {
        if (req.params && req.params.userId) {
            const result = await userService.findOne(req.params.userId)
            res.send(result)
        }
        else {
            res.status(400).send("user id is reqired")
        }
        
     } catch (error) {


        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
        
     }





    },


    async update(req, res, next) {


    try {
        

    if (req.params && req.params.userId) {



            const result = await userService.update(req.params.userId, req.body)
            res.send(result)
        }

        else {
            res.status(400).send("user id is required")
        }

    } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
    }
    },



    async create(req, res, next) {


     try {
        if (req.body) {
        

                const result = await userService.create(req.body)
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
        if (req.params && req.params.userId) {
            const result = await userService.delete(req.params.userId)
            res.send(result)

        }

        else {
            req.status(400).send("user id is req")
        }
     } catch (error) {
        console.log("error",error)
        res.status(500).send("internal Sever Error")
        
     }

    },

}