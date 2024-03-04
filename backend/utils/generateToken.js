jwt=require("jsonwebtoken")
secretKey="CRHqvVp7ImQa1ZI"
const generateWebToken=(userId,res)=>
{
    const token=jwt.sign({userId,secretKey},{
        expiresIn:'30d'
    })
    res.cookie("jwt",token,
    {
        maxAge:30*24*60*60*1000,
        httpOnly:true,
        sameSite:"Strict"
    })

}
module.exports=generateWebToken;