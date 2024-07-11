import express from "express";
import router from "./routes/routes.js";
import cors from 'cors' ;
import  connection  from "./db/db.js";
import dotenv from 'dotenv'


dotenv.config();
const app = express() ;

const PORT = 3000 ;

app.use(cors()) ;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/' , router);


connection() ;

app.listen(PORT ,  () => {console.log(`Server is Runing  ${PORT}`)})
      
  