import mongoose from "mongoose"
import dotenv from 'dotenv'

 
dotenv.config();

const connection = async () => {
    const URL = process.env.MONGO_URL  ;
    try {
        await mongoose.connect(URL, {useNewUrlParser : true}) ;
        console.log("connected to database") ;
    } catch (error) {
        console.log("Error while database connection" , error.message);
    }
}

export default connection ;
