const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next) {
   //Get token from the header
   const token = req.header('x-auth-token');
   
   //Check if no token
   if(!token) {
       return res.status(401).json({msg:'No token, authorization denied'});
   }

   //verify token (if it finds a token in header)
   try {
    const decoded = jwt.verify(token,config.get('jwtSecretToken'));
    req.user = decoded.user;
    next();
   }
   catch(err) {
     res.status(401).json({msg:'Token is not valid'})
   }
}
