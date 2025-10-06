const mongoose = require('mongoose')


const RefreshTokensSchema = new mongoose.Schema({
    token: {type: String, required: true}, // the actual refresh token string
    createdAt: {type: Date, default: Date.now}, // token creation date
    ip:String, // Optionally stores the IP address from which the token was created. 
    userAgent: String // Optionally stores the browser or the user information 
}, {_id:false}) // this tells the mongoose not to create an id field. Usually used when it is embedded


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase:true
    },
    passwordHash: {
        type: String,
        required: true,
    },
    role: {
        type: String, 
        enum: ['user', 'admin'],
        default: 'user'
    },
    refresheTokens: [RefreshTokensSchema]

})

UserSchema.method.toJSON = function () {
    const obj = this.toObject();
    delete obj.passwordHash;
    delete obj.refresheTokens;
    return obj;
}

module.exports = mongoose.model('Users', UserSchema);
