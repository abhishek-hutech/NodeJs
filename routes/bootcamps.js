
const express = require('express');
const router = express.Router();

const {getbootcamps,
    getbootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp} = require('../controllers/bootcamps')


 router
 .route('/')
 .get(getbootcamps)
 .post(createBootcamp)

router
.route('/:id')
.get(getbootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp) 

module.exports = router;