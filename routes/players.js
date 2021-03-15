const  express = require ("express");
const router= express.Router();
const Players = require('../models/Players')

router.get('/',(req,res)=>{
    res.send('All players')
})


router.post('/', async (req,res)=>{
    const players = new Players({
        firstName:req.body.firstName,
        lastName:req.body.lastName
    })

    try{
        const newPlayer = await players.save()
        res.send(newPlayer)
        
    } catch(err)
    {
        res.send("Message:"+err);
    }
  
})

module.exports=router;


