
import mongoose from "mongoose";



const fileSchema = mongoose.Schema ({

    path : {
        type : String ,
        required : true 
    } ,
    name : {
        type :String ,
        required : true 
    },
    
    downloadCount : {
        type : Number ,
        required : true ,
        default : 0

    }

})


 const fileModel  = mongoose.model('file' , fileSchema) ;

 export default fileModel ;