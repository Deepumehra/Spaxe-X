import { config } from "dotenv";
import PasswordResetToken from "../models/passwordResetToken.model.js";
import User from "../models/user.model.js";
config();
const EMAIL=process.env.EMAIL;

const PASSWORD=process.env.PASSWORD;

const createUser=async(userData)=>{
    try{
        const {fullName,email,password,role}=userData;
        const isUserExist=await createUser.findOne({email});
        if(isUserExist){
            throw new Error("User already exists with email :",email);
        }
        password=await bcryptjs.hash(password,8);

        const user=await User.create({
            fullName,
            email,
            password,
            role,
        });

        console.log("User :",user);
        return user;
    }catch(err){
        console.log("error - ", error.message);
      throw new Error(error.message);
    }

}

const getUserByEmail=async(email)=>{
    try {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new Error("user found with email : ", email);
        }
  
        return user;
      } catch (error) {
        console.log("error - ", error.message);
        throw new Error(error.message);
      }
}

const findUserById=async(userId)=>{
    try {
        const user = await User.findById(userId).populate("addresses");
        if (!user) {
          throw new Error("user not found with id : ", userId);
        }
        return user;
      } catch (error) {
        console.log("error :------- ", error.message);
        throw new Error(error.message);
      }
}

const findUserProfileByJwt =async(jwt)=>{
    try {
        const userId = jwtProvider.getUserIdFromToken(jwt);
  
        console.log("userr id ", userId);
  
        const user = await this.findUserById(userId);
        // .populate("addresses");
        user.password = null;
  
        if (!user) {
          throw new Error("user not exist with id : ", userId);
        }
        return user;
      } catch (error) {
        console.log("error ----- ", error.message);
        throw new Error(error.message);
      }
}

const updatePassword=async(user,newPassword)=>{
    try{
        if(!user){
            throw new Error('User doenot exist');
        }
        const hashedPassword=await bcryptjs.hashPassword(newPassword,10);
        user.password=hashedPassword;

        console.log("User :",user);

        await user.save();
    }catch(error){
        throw new Error(`Error updating password: ${error.message}`);
    }
}


const sendPasswordResetEmail=async(user)=>{
    try{
        const resetToken=uuid();
        const expiryDate=new Date.now();
        expiryDate.setMinutes(expiryDate.getMinutes()+10);

        await PasswordResetToken.create({
            token:resetToken,
            user,
            expiryDate,
        })

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user: EMAIL,
              pass: EMAIL_PASS,
            },
        });
        console.log(EMAIL,EMAIL_PASS);
        await transporter.sendMail({
            from: EMAIL,
            to: user.email,
            subject: "Password Reset",
            text: `Click the following link to reset your password: http://localhost:3000/account/reset-password?token=${resetToken}`,
        });
    }catch(error){
        throw new Error(`Error sending password reset email: ${error.message}`);
    }
}

const findUserByEmail=async(userEmail)=>{
    try{
        const user=await this.userRepository.findByEmail(userEmail);

        if(user){
            return user;
        }
        throw new Error(`User with email ${userEmail} does not exist`);
    }catch(error){
        throw new Error(`Error finding user by email : ${error.message}`);
    }
}
const findAllUsers=async()=>{
    try {
        const users = await this.userRepository.findAll();
        return users;
    }catch (error) {
        throw new Error(`Error fetching all users: ${error.message}`);
    }
}

export {
    createUser,
    findAllUsers,
    findUserByEmail,
    findUserById,
    findUserProfileByJwt,
    getUserByEmail,
    sendPasswordResetEmail,
    updatePassword
};


