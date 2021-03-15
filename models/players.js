const mongoose =require ('mongoose');


const PlayersSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    
    },
    lastName:{
        type:String,
        required:true
    
    },
    club:{
        type:String,
        default:'Manchester United'
    
    }
})

module.exports=mongoose.model('Players',PlayersSchema);