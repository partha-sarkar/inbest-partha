const mongoose = require('mongoose');

// Define the schema for the model
const rfqTravelSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    traveling_country:{type:String},
    traveling_start_date:{type:String},
    traveling_end_date:{type:String},
    traveling_type:{type:String},
    email_address:{type:String},
    mobile_number:{type:String},
    dob:{type:String},
    pasport_details:{type:String},
    travelling_policy_duration:{type:String},
    cover:{type:String},
    other_information:{type:String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 

},{
    timestamps:true
});

// Create the model from the schema
module.exports =  mongoose.model('rfq_travel', rfqTravelSchema);


