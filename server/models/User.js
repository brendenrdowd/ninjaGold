const mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    UserSchema = new Schema({
        username: String,
        password: String,
        gold: Number
    }, { userPushEach: true })
mongoose.model('User', UserSchema);