import mongoose from 'mongoose';

const Schema=new mongoose.Schema({
    fullName:{
        type:String,
        minLength:''
    },
    email:String,
    password:String,
    role:{
        type:String,
        enum:['USER','ASTROLOGIST'],
        default:'USER'
    }
});

const User=mongoose.model('User',UserSchema);

export default User;