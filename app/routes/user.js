const express=require('express');
const router=express.Router();
const userController = require('../controllers/user')

//--------------------------------create----------------------------------post----------------------------------
router.post('/user',(req, res, next)=>{
    userController.create(req, res, next)
});


//--------------------------------get----------------------------------find-------------------------------------
router.get('/user',(req, res, next)=>{
    userController.find(req, res, next)
});



//--------------------------------get1----------------------------------findOne--------------------------------------
router.get('/user/:userId',(req, res, next)=>{
    userController.findOne(req, res, next)
});


//--------------------------------update----------------------------------put---------------------------
router.put('/user/:userId',(req, res, next)=>{
    userController.update(req, res, next)
});


//--------------------------------delete----------------------------------
router.delete('/user/:userId', (req, res ,next)=>{
userController.delete(req, res, next)
});


module.exports=router