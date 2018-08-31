const Gold = require('../controllers/GoldController.js'),
    path=require("path");

module.exports = function (app) {

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