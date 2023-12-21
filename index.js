const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MeanstackFinalProject")
// --------------------------

const express = require("express");
const app = express();

// for user routes
const userRoute = require('./routes/userroute');
app.use('/',userRoute);

// for Admin routes
const adminRoute = require('./routes/adminRoute');
app.use('/admin',adminRoute);

app.listen(3000,function(){
    console.log("Server is running...!");
});