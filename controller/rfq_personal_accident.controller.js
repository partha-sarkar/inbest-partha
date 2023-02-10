const rfqPersonalAccidentModel = require('../model/rfq_personal_accident.model');



exports.create = async (req)=>{
    try{       
       const rfqPersonalAccident = new rfqPersonalAccidentModel(req);
       const result = await rfqPersonalAccident.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}