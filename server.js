const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyparser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/contactNetflix' );

var db= mongoose.connection;

db.on('error', console.error.bind ( console, 'connection error:'));
db.once('open',function(){
    console.log('We are connected!!');
});
var netflixschema = new mongoose.Schema({
    email : String
})

var Netflix = mongoose.model('Netflix', netflixschema);


app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.get('/',(req, res) => {
    res.status(200).render('index')
});

app.post('/',(req,res)=>{
    var myData = new Netflix(req.body);

        myData.save().then(()=>{
            res.send("your form has been submitted")
        }).catch(()=>{
            res.send("Item was not saved");
        });
        res.render('index',{title: 'Netflix'});
})

    app.listen(port,() => {
        console.log(`Server running at http://localhost:${port}`);
    });

