import fileModel from "../model/valid.js"




export const uploadImage = async (req , res)=>{

    const fileObj = {
        path: req.file.path,
        name : req.file.originalname ,
    }

    try {

       const file =  await fileModel.create(fileObj) ;
        
       res.status(200).json({path : `https://localhost:3000/file/${file._id}`})
    } catch (error) {
        console.log("error occur " , error.message)
       return  res.status(500).json({error : error.message})
    }
}


export const downloadImage = async (req , res) =>{ 
    try {
       const file =  await fileModel.findById(req.params.fileId) ;
       file.downloadCount++ ;
       await fileModel.save() ;
       res.download(file.path , file.name);
        
    } catch (error) {
        console.log("error occur " , error.message)
        return res.status(500).json({error : error.message})
    }
}