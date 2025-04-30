const adminAuth =(req,res,next)=>{
    console.log("auth checked")
    const token = 'xyz';
    const isAuthorized = token ==='xyz';
    if(!isAuthorized){
        res.status(401).send("Unauthorized Token")
    }else{
        next();
    }
}
module.exports ={adminAuth}