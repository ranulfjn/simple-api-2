const  express = require ("express");
const router= express.Router();
const Players = require('../models/Players')
const addUser = require('../controllers/players')

router.get('/',(req,res)=>{
    res.send('All players')
})


router.post('/', addUser)

module.exports=router;


