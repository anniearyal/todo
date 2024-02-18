const homePage = (req,res)=>{
    res.status(200).json({message:"Home Page"})
}
const userRegister =(req,res)=>{}
const userLogin =(req,res)=>{}









module.exports = {
    homePagePage:homePage,
    userRegister: userRegister,
    userLogin:userLogin
}