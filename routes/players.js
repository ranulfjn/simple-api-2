import  express from "express";

const router= express.Router();

router.get('/',(req,res)=>{
    res.send('ALl players')
})


export default router;