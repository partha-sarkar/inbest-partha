const mongoose = require('mongoose');

// Define the schema for the model
const rfqPersonalAccidentSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    client_dob:{type:String},
    address:{type:String},
    sum_insured:{type:Number},
    phone_number:{type:String},
    client_email:{type:String},
    occupation:{type:String},
    nominee_name:{type:String},
    nominee_dob:{type: String},
    nominee_relation:{type: String},
    annual_income:{type: String},
    other_information:{type: String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 
},{
    timestamps:true
});

// Create the model from the schema
module.exports =  mongoose.model('rfq_personal_accident', rfqPersonalAccidentSchema);


