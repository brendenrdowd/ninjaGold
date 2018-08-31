const Gold = require('../controllers/GoldController.js'),
    path=require("path");

module.exports = function (app) {

    app.post('/processMoney',(req,res)=>{
        Gold.processMoney(req,res);
    })

    app.post('/login',(req,res)=>{
        Gold.login(req.res);
    })
    app.post('/register',(req,res)=>{
        Gold.register(req.res);
    })

    app.get('/save',(req,res)=>{
        Gold.save(req.res);
    })
    app.get('/load',(req,res)=>{
        Gold.load(req.res);
    })
    app.get('/authenticate',(req,res)=>{
        Gold.authenticate(req.res);
    })

    app.all('*', (req, res) => {
        res.sendFile(path.resolve('./client/dist/client/index.html'));
    })
}