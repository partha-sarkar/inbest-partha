const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/inbest_insurance', { useNewUrlParser: true }, (err) => {
    if (!err) { 
        console.log('MongoDB Connection Succeeded.')
     } else { 
        console.log('Error in DB connection : ' + err)
     }
});
