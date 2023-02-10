const rfq_homeModel = require('../model/rfq_home.model');


exports.create = async (req)=>{
    try{       
       const rfq_home = new rfq_homeModel(req);
       const result = await rfq_home.save();
       if(result._id!=''){
          return JSON.stringify({"status":200,"data":result});
       }else{
          return JSON.stringify({"status":400});
       }

     }catch (err) {
        console.log(err);
      }
}