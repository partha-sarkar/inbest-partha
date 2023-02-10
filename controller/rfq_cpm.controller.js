const rfq_cpmModel = require('../model/rfq_cpm.model');


exports.create = async (req)=>{
    try{       
       const rfq_cpm = new rfq_cpmModel(req);
       const result = await rfq_cpm.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}