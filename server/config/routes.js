const Gold = require('../controllers/GoldController.js'),
    path=require("path");

module.exports = function (app) {

    app.post('/save',(req,res)=>{
        Gold.save(req,res);
    })
    app.post('/login',(req,res)=>{
        Gold.login(req,res);
    })


    app.get('/load',(req,res)=>{
        Gold.load(req,res);
    })

    app.get('/authenticate',(req,res)=>{
        Gold.authenticate(req,res);
    })

    app.get('/logout',(req,res)=>{
        Gold.logout(req,res);
    })
    

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/client/index.html'));
    })
}