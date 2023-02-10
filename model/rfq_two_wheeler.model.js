const mongoose = require('mongoose');

// Define the schema for the model
const rfqTwoWheelerSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    registration_number:{type:String},   
    date_of_registration:{type:String},   
    vehicle_price:{type:String},   
    idv:{type:String},   
    zone:{type:String},   
    cc_of_vehicle:{type:String},   
    ev:{type:String,enum:["yes","no"]},   
    if_any_claim_has_taken_prev:{type:String,enum:["yes","no"]},
    others:{type:String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 

},{
    timestamps:true
});

// Create the model from the schema
module.exports =  mongoose.model('rfq_two_wheeler', rfqTwoWheelerSchema);


