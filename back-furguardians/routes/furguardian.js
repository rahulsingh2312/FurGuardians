const express = require('express');
const router = express.Router();
const FurGuardianController = require('../controller/FurGuardian')

router.get("/add", FurGuardianController.show );
router.post("/add", FurGuardianController.add);
module.exports=router;