const express= require('express');
const router= express.Router();
const commentsController= require('../controllers/comments')

router.post('/comments', (req, res,next)=>{
    commentsController.create(req,res,next)
});

router.get('/comments', (req, res,next)=>{
    commentsController.find(req,res,next)
});

router.get('/comments/:commentsId', (req, res,next)=>{
    commentsController.findOne(req,res,next)
});

router.put('/comments/:commentsId', (req, res,next)=>{
    commentsController.update(req,res,next)
});

router.delete('/comments/:commentsId', (req, res,next)=>{
    commentsController.delete(req,res,next)
});

module.exports=router