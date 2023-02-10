const rfq_burglaryModel = require('../model/rfq_burglary.model');


exports.create = async (req)=>{
    try{       
       const rfq_burglary = new rfq_burglaryModel(req);
       const result = await rfq_burglary.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}