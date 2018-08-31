const mongoose = require("mongoose"),
    User = mongoose.model('User');

const bcrypt = require('bcrypt');


module.exports = {

    //all functions untested in this application

    save: function (req,res) {
        //need to check user in service before directing here
        User.findById(req.session.user._id,(err,user)=>{
            if(err){console.log("Save Error:",err)}
            user.gold = req.body.gold;
            user.save();
            return res.json(user)
        })
    },

    load: function (req,res) {
        User.findOne({username:req.body.username},(err,user)=>{
            if(err){console.log(err)}
            if(user){
                if(user.password == req.body.password){
                    req.session.user = user;
                    return res.json({user:user})
                }else{
                    return res.json(null)
                }
            }
            if(!user){
                User.create({username:req.body.username,password:req.body.password},(error,newUser)=>{
                    if(error){console.log("Creation Error:",error)}
                    req.session.user = user;
                    return res.json({user:newUser,alert:'new user created'})
                })
            }
        })
    },

    authenticate: function (req,res){
        if(req.session){
            if(req.session.user == null){
                return res.json(null)
            } else {
                return res.json(req.session.user)
            }
        }
    },
}