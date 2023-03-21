const express= require('express');
const router= express.Router();
const categoryController= require('../controllers/category')

router.post('/category', (req, res,next)=>{
    categoryController.create(req,res,next)
});

router.get('/category', (req, res,next)=>{
    categoryController.find(req,res,next)
});

router.get('/category/:categoryId', (req, res,next)=>{
    categoryController.findOne(req,res,next)
});

router.put('/category/:categoryId', (req, res,next)=>{
    categoryController.update(req,res,next)
});

router.delete('/category/:categoryId', (req, res,next)=>{
    categoryController.delete(req,res,next)
});

module.exports=router