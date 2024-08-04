const express = require('express');
const { authenticateJWT } = require('../middleware/auth');
const { createTrain, updateTrain, deleteTrain } = require('../controllers/adminController');
const router = express.Router();

// Admin routes to manage trains
router.post('/trains/create', authenticateJWT, createTrain);
router.put('/trains/update/:trainId', authenticateJWT, updateTrain);
router.delete('/trains/delete/:trainId', authenticateJWT, deleteTrain);

module.exports = router;
