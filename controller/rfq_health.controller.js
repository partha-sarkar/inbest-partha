const rfqHealthModel = require('../model/rfq_health.model');



exports.create = async (req)=>{
    try{       
       const rfqHealth = new rfqHealthModel(req);
       const result = await rfqHealth.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}