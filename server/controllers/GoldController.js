const mongoose = require("mongoose"),
    User = mongoose.model('User');

const bcrypt = require('bcrypt');


module.exports = {

    save: function (req, res) {
        User.findById(req.session.user._id, (err, user) => {
            if (err) { console.log("Save Error:", err) }
            user.gold = req.body.gold;
            user.save();
            return res.json(user)
        })
    },

    login: function (req, res) {
        User.findOne({ username: req.body.username }, (err, user) => {
            if (err) { console.log(err) }
            if (user) {
                if (user.password == req.body.password) {
                    req.session.user = user;
                    this.load(req,res);
                } else {
                    return res.json(null)
                }
            }
            if (!user) {
                User.create({ username: req.body.username, password: req.body.password, gold: req.body.gold }, (error, newUser) => {
                    if (error) { console.log("Creation Error:", error) }
                    console.log("creating user:",newUser)
                    req.session.user = newUser;
                    res.json("No Game Found, creating new profile")
                })
            }
        })
    },

    load: function (req, res) {
        User.findById(req.session.user._id,(err,user)=>{
            return res.json(user)
        })
    },

    authenticate: function (req, res) {
        if (req.session.user) {
            return res.json(req.session)
        } else {
            return res.json(null)
        }
    },

    logout: function (req, res) {
        req.session.destroy()
        res.redirect('/')
    }
}