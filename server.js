const express = require('express');
const app = express();
const ejs = require(ejs);
app.set('view engine', 'ejs')
const port = 9000;

app.use(express.static('public'));
app.use('/assets', express.static('express'));

app.get('/', (req, res)=>{
    res.send(' this page is active ')
})

app.listen(port, (req, res)=>{
    console.log(` port ${port} is now running`)
});

