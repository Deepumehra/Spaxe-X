import mongoose from 'mongoose';
const MONGO_URL='mongodb://127.0.0.1:27017/space';

async function connectToDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Connected to mongoDb :",MONGO_URL);
    }catch(err){
        console.log("Failed to connect to MongoDB",err);
    }
}
export default connectToDB;