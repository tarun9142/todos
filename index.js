const express  = require('express');
const app = express();
const port = 8000;

const Task = require('./models/task');
const db = require('./config/mongoose');


app.set('view engine','ejs');
app.set('views','./views');

// Middlewares
app.use(express.urlencoded());
app.use(express.static('./assets'));

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`error: ${err}`);
        return;
    }
    console.log(`server is up and running on port: ${port}`);
})