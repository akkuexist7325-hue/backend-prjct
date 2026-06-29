import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema=new mongoose.Schema({
    id:{
        type:number,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    fullname:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true,
    },
    avtar:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true,
        lowercase:true,
    },
    coverimage:{
        type:String,
        
    },
    password:{
        type:String,
        required:[true,"password is necessaryly required, so enter the password"]
    },
    refreshtokens:{
        type:String,
        
    },
    whatchistory:[{
        type:Schema.Types.objectID,
        ref:"video"
    }]
},{timestamps:true});

/*----------> here pre middleware is used to encrypt the password before saving to the database---->so that no one can get acces to the password of the user---------->*/ 

userschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=bcrypt.hash(this.password,10);
        next();
    }
})

//----------->using methods of the mongoose to check that the encrypted and the the orginal password is same or not ------------->//

userschema.methods.Ispasswordcorrect= async function(password){
    return await bcrypt.compare(password,this.password);

}

//------------>now generating jwt tokens for security purpose||(access tokens,refresh tokens)---------------->//

//----------------------------->access-tokens------------------------------->//
userschema.methods.Accesstokens=function(){
    jwt.sign({
        id:this.id,
        username:this.username,
        fullname:this.fullname

    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIREY,
        }
    )}

    //----------------------------->refersh-tokens--------------------------->//

userschema.methods.Refershtokens=function(){
    jwt.sign(
        {
               id:this.id,
    },
        process.env.REFRESH_TOKEN_EXPIREY,{
            expiresIN:process.env.REFRESH_TOKEN_EXPIREY
        }
    )
}
export const user=mongoose.models("user",userSchema)