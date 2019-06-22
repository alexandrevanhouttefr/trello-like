var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    var token = req.cookies['jwt'];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, 'supersecret', function(err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        req.userId = decoded.userid;
        next();
    });
}
module.exports = verifyToken;