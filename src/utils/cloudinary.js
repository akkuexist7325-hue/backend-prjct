import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// Configuration//

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.UDINARY_SECRET_KEY 
    });

const uploadoncloudinaryfiles=async function(localfilepath)
{
    try{
        if(!localfilepath) return null;
        //------------------>if it exits then upload file-------------->//

        const response= await cloudinary.uploader.upload(localfilepath,
            {resource_type:auto,})
            console.log("file has been uploaded on cloudinary",response.url);
            return response;
        }            
//--------------------->file has been uploaded succesfully on cloudinary----------------->
    catch(error){
        fs.unlinkSync(loaclfilepath)  //file has not been uploaded succefully form thr local server//
        console.log("error in uploading file");

    }

}