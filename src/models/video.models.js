import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoschema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
        index:true,

    },
    videoThumbnail:{
        type:String,
        required:true,
        
    },
    videofile:{
        type:String,
        required:true,
        
    },
    owner:{
        type:schema.types.objectID,
        ref:"user",
        index:true,
    },
    title:{
        type:String,
        required:true,
    },
    duaration:{
        type:number,
        required:true,
        
    },
    discription:{
        type:String,
        required:true,
        unique:true,
        
    },
    views:{
        type:number,
        required:true,
        
    },
    ispublished:{
        type:String,
        required:true,
        
    },
    
},{timestamps:true})

export const video= mongoose.models("video",videoschema);