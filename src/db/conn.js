const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Users')
.then(()=>console.log("Connected to the DB"))
.catch((err)=>console.log(`Could not connect as ${err}`));