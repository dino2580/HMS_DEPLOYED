jwt=require("jsonwebtoken")
secretKey="CRHqvVp7ImQa1ZI"
const generateWebToken=(rollNumber,res)=>
{
    const token=jwt.sign({email,admin},secretKey,{
        expiresIn:'30d'
    })
    res.cookie("jwt",token,
    {
        maxAge:30*24*60*60*1000,
        httpOnly:false,
        sameSite:"None",
        secure:true,
    })

}
module.exports=generateWebToken;