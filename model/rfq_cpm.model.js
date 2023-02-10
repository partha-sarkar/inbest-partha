const mongoose = require('mongoose');
const rfq_cpmSchema = new mongoose.Schema({
    client_id:{type:String},
    client_name:{type:String},
    address:{type:String},
    projec_type:{type:String},
    equipment_site_address:{type:String},
    equipment_type:{type:String},
    equipment_imported:{type:String, enum:["yes", "no"]},
    equipment_sum_insured:{type:Number},
    equipment_cover_require:{type:String,enum:["yes", "no"]},
    floater_cover:{type:String,enum:["yes", "no"]},
    stfi_require:{type:String,enum:["yes", "no"]},
    hypothecation:{type:String,enum:["yes", "no"]},
    others:{type:String},
    rm_id:{type:String}, // relationship manager ID 
    rm_name:{type:String} // relationship manager name optional 
       
       
},{
    timestamps:true
});


module.exports = mongoose.model('rfq_cpm', rfq_cpmSchema);