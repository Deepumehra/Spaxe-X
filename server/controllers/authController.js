import { createUser, getUserByEmail, sendPasswordResetEmail, updatePassword } from '../services/user.service.js';

import { generateToken } from '../configs/jwtProvider';
import { deleteToken } from '../services/passwordResetToken.service.js';


const register=async(req,res)=>{
    try{
        const user=await createUser(req.body);

        const jwt=generateToken(user._id);

        return res.status(200).json({
            jwt,message:'Register successfully'
        });
    }catch(error){
        return res.status(500).json({
            error:error.message
        });
    }
};

const login=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user = await getUserByEmail(email);

        if (!user) {
        return res
            .status(404)
            .json({ message: "User not found With Email ", email });
        }

        const isPasswordValid = bcryptjs.compare(password, user.password);

        if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "login success" });
    }catch(error){
        return res.status(500).json({
            error:error.message
        });
    }
}

const resetPassword=async(req,res)=>{
    try{
        const {token,password}=req.body;

        const resetToken=await findByToken(token);

        if(!resetToken){
            throw new Error('Token is required');
        }
        if(resetToken.isExpired()){
            await deleteToken(resetToken._id);

            throw new Error('Token is expired');
        }
        const user=resetToken.user;
        await updatePassword(user,password);

        await delete(resetToken);

        const response={
            message:'Password updated successfully',
            status:true,
        }
        res.status(200).json(response);
    }catch(error){
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Internal server error" });
        }
    }
}

const resetPasswordRequest = async (req, res) => {
    try {
      const { email } = req.query;
  
      const user = await getUserByEmail(email);
  
      if (!user) {
        throw new Error("User not found");
      }
  
      await sendPasswordResetEmail(user);
  
      const response = {
        message: "Password reset email sent successfully.",
        status: true,
      };
  
      res.status(200).json(response);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };

  export { login, register, resetPassword, resetPasswordRequest };

