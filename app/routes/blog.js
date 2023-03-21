const express= require('express');
const router= express.Router();
const blogController= require('../controllers/blog')

router.post('/blog', (req, res,next)=>{
    blogController.create(req,res,next)
});

router.get('/blog', (req, res,next)=>{
    blogController.find(req,res,next)
});

router.get('/blog/:blogId', (req, res,next)=>{
    blogController.findOne(req,res,next)
});

router.put('/blog/:blogId', (req, res,next)=>{
    blogController.update(req,res,next)
});

router.delete('/blog/:blogId', (req, res,next)=>{
    blogController.delete(req,res,next)
});

module.exports=router