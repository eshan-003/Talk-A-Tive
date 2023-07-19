const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://eshanchakra2018:eshanp2018@cluster0.bvqanrm.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
