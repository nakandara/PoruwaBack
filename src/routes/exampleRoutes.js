// exampleRoutes.js
const express = require('express');
const exampleController = require('../controllers/examplecontroller');
const router = express.Router();

router.get('/', exampleController.getExample);
router.post('/', exampleController.postExample);

module.exports = router;
