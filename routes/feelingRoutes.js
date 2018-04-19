const express = require('express');
const router = express.Router();

//le home
router.get('/', (req,res) => {
  res.render('../views/pages/index');
});







































module.exports = router;
