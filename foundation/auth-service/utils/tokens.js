const jwt = require('jsonwebtoken')


/**
 * 
    This function creates a new JWT (a secure, signed token) 
    which encodes the given payload (usually user-related data).

    It uses a secret string to sign the token, 
    ensuring only authorized parties can create or validate tokens.

    The expiresIn option sets how long the token is valid (e.g., '15m' for 15 minutes)

    Internally, it calls jwt.sign(payload, secret, { expiresIn }) which returns the signed token string

 */

function signAccessToken(payload, secret, expireIn) {

    return jwt.sign(payload, secret, {expireIn});

}


/**
 * 
    This function validates an incoming JWT using the same secret that was used to sign it.

    If valid, it returns the decoded payload (the information originally encoded).

    If invalid or expired, it throws an error, helping the app reject unauthorized or expired tokens.

    Internally, it calls jwt.verify(token, secret).


 */
function verifyToken(token, secret){
    return jwt.verify(token, secret);
}

module.export = {signAccessToken, verifyToken}