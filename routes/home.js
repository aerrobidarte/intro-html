const express = require ('express');
const path=require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'../views/home.html'));
});

module.exports=router;