

const commentsService = require('../services/comments')

module.exports = {





    async find(req, res, next) {


        try {
            const result = await commentsService.find()



            res.send(result)

        } catch (error) {

            console.log("error", error)
            res.status(500).send("internal Sever Error")

        }

    },



    async findOne(req, res, next) {


        try {
            if (req.params && req.params.commentsId) {
                const result = await commentsService.findOne(req.params.commentsId)
                res.send(result)
            }
            else {
                res.status(400).send("comments id is reqired")
            }

        } catch (error) {


            console.log("error", error)
            res.status(500).send("internal Sever Error")


        }





    },


    async update(req, res, next) {


        try {


            if (req.params && req.params.commentsId) {



                const result = await commentsService.update(req.params.commentsId, req.body)
                res.send(result)
            }

            else {
                res.status(400).send("comments id is required")
            }

        } catch (error) {
            console.log("error", error)
            res.status(500).send("internal Sever Error")

        }
    },



    async create(req, res, next) {


        try {
            if (req.body) {

                const result = await commentsService.create(req.body)
                res.send(result)
            }

            else {
                res.status(400).send("title body req")

            }


       

    
} catch (error) {
    console.log("error", error)
    res.status(500).send("internal Sever Error")

}
    },




    async delete (req, res, next) {
    try {
        if (req.params && req.params.commentsId) {
            const result = await commentsService.delete(req.params.commentsId)
            res.send(result)

        }

        else {
            req.status(400).send("comments id is req")
        }
    } catch (error) {
        console.log("error", error)
        res.status(500).send("internal Sever Error")

    }

},

}