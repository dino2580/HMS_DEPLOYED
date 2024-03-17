jwt=require("jsonwebtoken")
secretKey="CRHqvVp7ImQa1ZI"
const generateWebToken=({email,admin,hostel_no},res)=>
{
    const token=jwt.sign({email,admin,hostel_no},secretKey,{
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