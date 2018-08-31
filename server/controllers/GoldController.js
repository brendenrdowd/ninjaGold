const mongoose = require("mongoose"),
    User = mongoose.model('User');

const bcrypt = require('bcrypt');


module.exports = {
    
    login: function (req,res){},

    register: function (req,res){},

    save: function (req,res) {
        //User.findById(id,(err,user)=>{
            //user.gold = req.session.gold
            //return res.json(user)
        // })
    },

    load: function (req,res) {
        //User.findById(id,(err,user)=>{
            //return res.json(user)
        //})
    },

    authenticate: function (req,res){},
}