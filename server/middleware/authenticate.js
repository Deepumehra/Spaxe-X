import { getUserIdFromToken } from "../configs/jwtProvider.js";


const authenticate=async(req,res,next)=>{
    try{
        const token=req.header.authorization?.split(" ")[1];
        if(!token){
            return res.status(404).send({
                message:'Token not found'
            })
        }
        const userId=getUserIdFromToken(token);

        const user=await userService.findUserById(userId);
        req.user=user;
    }catch(error){
        return res.status(500).send({error: error.message});
    }
    next();
}

export default authenticate;