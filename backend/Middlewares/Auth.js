const jwt = require('jsonwebtoken');
const ensureAuthenticated=(req, res, next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(403)
               .auth({message: 'Unauthorized, JWT token is require'});

    }
    try{
         const decoded = jwt.verify(auth,process.env.JWT_SECRET);
         req.user = decoded;
         next();

    }catch(error){
        return res.status(403)
        .auth({message: 'Unauthorized, JWT token is wrong and expired   '});
    }
}

module.exports = ensureAuthenticated;