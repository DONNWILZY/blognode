const express = require('express');
const app = express();
const ejs = require("ejs");
const port = 9001;


app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, (req, res)=>{
    console.log(` port ${port} is now running`)
});

