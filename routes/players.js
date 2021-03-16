const  express = require ("express");
const router= express.Router();
const {addUser ,getUser ,getUserById ,updatePlayer ,deletePlayer }= require('../controllers/players')


router.get('/',getUser)
router.post('/', addUser)
router.get('/:id',getUserById )
router.patch('/:id',updatePlayer)
router.delete('/:id',deletePlayer)


module.exports=router;


