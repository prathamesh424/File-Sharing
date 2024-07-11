import express from 'express' ;
import { downloadImage, uploadImage } from '../controlers/imageControler.js';
import upload from '../middleware/uploads.js';

const router = express.Router() ;


router.post("/upload" , upload.single('file') , uploadImage) ;
router.get('/file/:fileId', downloadImage)


export default router ;