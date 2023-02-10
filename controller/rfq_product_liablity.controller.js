const rfqroductLiablityModel = require('../model/rfq_product_liability.model');



exports.create = async (req)=>{
    try{       
       const rfqroductLiablity = new rfqroductLiablityModel(req);
       const result = await rfqroductLiablity.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}