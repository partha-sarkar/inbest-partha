const mongoose = require('mongoose');

// Define the schema for the model
const rfqHealthtSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    insurance_type:{type:String,enum:["fresh","portablity"]},
    risk_exp_date:{type:String},
    client_dob:{type:String},
    address:{type:String},
    sum_insured:{type:Number},
    pre_existing_disease:{type:String},
    hieght:{type:String},
    weight:{type:String},
    occupation:{type:String},
    mobile_number:{type:String},
    client_email:{type:String},   
    nominee_name:{type:String},
    nominee_dob:{type: String},
    nominee_relation:{type: String},
    other_information:{type: String},
    any_major_operations_in_last_three_year:{type:String},
    personal_habit:{type:String,enum:["smoking","drinking"]},
    regular_medicine_name:{type:String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 
},{
    timestamps:true
});

// Create the model from the schema
module.exports =  mongoose.model('rfq_health', rfqHealthtSchema);


