const express = require('express');
const router = express.Router();
const {detalle} = require ('../controllers/detalleController')


/* GET users listing. */
router.get('/detalle', detalle);

module.exports = router;
