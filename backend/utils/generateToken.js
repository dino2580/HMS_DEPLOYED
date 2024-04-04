jwt=require("jsonwebtoken")
secretKey="CRHqvVp7ImQa1ZI"
const generateWebToken=({email,admin,super_admin,hostel_no,userId,full_name,present},res)=>
{
    console.log("super_admin from gentoken"+super_admin);
    const token=jwt.sign({email,admin,hostel_no,userId,full_name,super_admin,present},secretKey,{
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