const Players = require('../models/Players')

const getUser =async (req,res)=>{

    try{
        const players = await Players.find();
        res.send(players)
    } catch (err)
    {
        res.send("message:"+err);
    }
   
}


const getUserById =async(req,res)=>{
    

    try{
        const foundPlayer = await Players.findById(req.params.id);
        res.send(foundPlayer);
    } catch(err){
        res.send('message:'+ err);
    }
  
}

const addUser = async (req,res)=>{
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
  
};
const deletePlayer = async (req,res)=>{

    try{
        const removedPlayer = await Players.remove({ _id:req.params.id })
        res.send(removedPlayer);
    }catch(err){
        res.send('Message:'+err)
    }
   

}
const updatePlayer = async (req,res)=>{
    try{
        const Updatedplayer = await Players.updateOne(
            { _id:req.params.id } ,
            { $set: { firstName:req.body.firstName} })
        res.send(Updatedplayer);
    }catch (err){
        res.send("message:"+err)
    }

    

};



module.exports={
    addUser,
    getUser,
    getUserById,
    deletePlayer,
    updatePlayer
};