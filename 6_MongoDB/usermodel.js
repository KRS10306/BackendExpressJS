const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

const userSchema = mongoose.Schema({//Schema is a method that accepts object
    name : String,
    username : String,
    email : String
})



module.exports = mongoose.model("user", userSchema);//Model proralises user => user = users in the create model
//module.export is a property used to export something
