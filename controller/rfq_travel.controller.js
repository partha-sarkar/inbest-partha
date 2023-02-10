const rfqTravelModel = require('../model/rfq_travel.model');

exports.create = async (req)=>{
    try{       
        const rfqTravel = new rfqTravelModel(req);
     
        const result = await rfqTravel.save();
        if(result._id!=''){
            return JSON.stringify({"status":200,"data":result});
        }else{
            return JSON.stringify({"status":400});
        }

     }catch (err) {
        console.log(err);
      }
}