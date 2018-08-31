const mongoose = require("mongoose"),
    User = mongoose.model('User');


module.exports = {
    
    login: function (req,res){},

    register: function (req,res){},

    processMoney: function (req,res) {
        req.session.gold += req.body
        return res.json(req.session.gold)
    },

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