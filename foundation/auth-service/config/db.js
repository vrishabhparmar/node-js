const mongoose = require('mongoose')

async function connectDB(uri) {
    return mongoose.connect(uri, {
        userNewUrlParser: true, 
        useUnifiedTopology: true
    })
}

module.exports = connectDB;