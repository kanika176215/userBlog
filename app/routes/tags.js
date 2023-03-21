const express= require('express');
const router= express.Router();
const tagsController= require('../controllers/tags')

router.post('/tags', (req, res,next)=>{
    tagsController.create(req,res,next)
});

router.get('/tags', (req, res,next)=>{
    tagsController.find(req,res,next)
});

router.get('/tags/:tagsId', (req, res,next)=>{
    tagsController.findOne(req,res,next)
});

router.put('/tags/:tagsId', (req, res,next)=>{
    tagsController.update(req,res,next)
});

router.delete('/tags/:tagsId', (req, res,next)=>{
    tagsController.delete(req,res,next)
});

module.exports=router