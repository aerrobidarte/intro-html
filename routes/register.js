const express = require ('express');
const registerController = require ('../controllers/registerController.js');
const router = express.Router();

router.get('/',registerController.index);

module.exports=router;