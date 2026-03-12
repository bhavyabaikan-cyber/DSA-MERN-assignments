import jwt from 'jsonwebtoken'
const {verify}  = jwt

export function verifyToken(req,res,next){
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message : "Plesase Login"})
    }
    try{
        const decodedToken = verify(token,"abcd")
        req.user = decodedToken
        next()
          
    } catch(err){
        res.status(401).json({message : "session expired,Please relogin"})
    }
}