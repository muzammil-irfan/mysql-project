import mongoose from "mongoose";


const TagSchema = mongoose.Schema({
      
    name: {
        type:String,
        required:true,
        unique:true,
    }
   
    

    
})

const Tag = mongoose.model('Tag', TagSchema);

export default Tag;