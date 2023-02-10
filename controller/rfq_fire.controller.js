const rfq_fireModel = require('../model/rfq_fire.model');


exports.create = async (req)=>{
    try{       
       const rfq_fire = new rfq_fireModel(req);
       const result = await rfq_fire.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}