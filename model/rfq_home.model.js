const mongoose = require('mongoose');
const rfq_homeSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    address:{type:String},
    mobile_number:{type:String},
    carpet_area:{type:String},
    rate_per_sqft:{type:String},
    risk_address:{type:String},
    pin_code:{type:String},
    age_of_building:{type:Number},
    building_construction_cost:{type:Number},
    furniture:[{
        item_name:String,
        item_age:Number,
        item_price:Number,

    }],
    electronic:[{
        item_name:String,
        item_age:Number,
        item_price:Number,

    }],
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String}, // relationship manager name optional 
    others:{type:String},

    
       
},{
    timestamps:true
});

module.exports = mongoose.model('rfq_home', rfq_homeSchema);