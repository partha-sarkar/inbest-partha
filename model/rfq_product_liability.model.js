const mongoose = require('mongoose');

// Define the schema for the model
const rfqPLSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    address:{type:String},
    item_to_be_covered:{type:String},
    total_turnover_for_last_year:{type:String},
    geo_location:{type:String},
    last_five_year_claim_history:{type:String},
    no_of_years_in_trade:{type:String},
    insured_product:{type:String},
    sum_insured:{type:Number},
    period_of_insurance:{type:String},
    other_information:{type: String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 
},{
    timestamps:true
});

// Create the model from the schema
module.exports =  mongoose.model('rfq_product_liability', rfqPLSchema);


