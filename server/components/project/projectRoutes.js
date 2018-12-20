const express = require('express');
const authMW = require('../custom_middlewares/authorizationMW');

const router = express.Router();

const {
  projectCreateOne,
  projectGetAll,
  projectGetByName,
  projectUpdateById,
  projectDeleteById,
} = require('./projectController');

router.get('/get-all', projectGetAll);
router.get('/get-by-name', projectGetByName);
router.post('/create-one', authMW, projectCreateOne);
router.patch('/update-by-id', authMW, projectUpdateById);
router.delete('/delete-by-id', authMW, projectDeleteById);
module.exports = router;
