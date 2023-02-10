const mongoose = require('mongoose');
const rfq_fireSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    phone_number:{type:String},
    address:{type:String},
    pincode:{type:String},
    building_value:{type:Number},
    machine_and_plant_value:{type:Number},  
    bharat_sukhsham_laghu:{type:String,enum:["sukhsham", "laghu"]},  
    nature_of_occupancy:{type:String},
    raw_material_used:{type:String},
    finished_goods:{type:String},
    machinery_cost:{type:Number},
    raw_material_cost:{type:Number},
    finished_cost:{type:Number},
    cash_kept_in_till:{type:Number},
    cash_kept_in_transit:{type:Number},
    other:{type:String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 
       
       
},{
    timestamps:true
});


module.exports = mongoose.model('rfq_fire', rfq_fireSchema);