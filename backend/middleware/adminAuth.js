import jwt from 'jsonwebtoken';

const adminAuth = async (req,res,next)=>{
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({success:false,message:'Not Authorized Login Again'});
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(token_decode.id);
        if(user.role !== "admin"){
            return res.json({success:false,message:'Not Authorized Login Again'});
        }
        req.body.userId = user.id; // passing user id to request body for further use
        next();
    }catch(error){
            console.log(error);
            return res.json({success:false,message:error.message});
    }
}
export default adminAuth;