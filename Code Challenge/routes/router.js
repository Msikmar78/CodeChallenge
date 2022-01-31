const { Router } = require('express');
const router = Router();
const controller = require('../controllers/controller');

router.get('/voters', controller.voters_get);
router.post('/voters', controller.voters_post);

module.exports = router;