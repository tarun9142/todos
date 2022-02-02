const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/todos_db');

// acquire the connection to check if it is successfull
const db = mongoose.connection;

db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open',function(){
    console.log('successfully connected to db');
})