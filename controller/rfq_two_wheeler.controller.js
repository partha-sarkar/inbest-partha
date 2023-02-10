const rfqTwoWheelerModel = require('../model/rfq_two_wheeler.model');

exports.create = async (req)=>{
    try{       
        const rfqTwoWheeler = new rfqTwoWheelerModel(req);
     
        const result = await rfqTwoWheeler.save();
        if(result._id!=''){
            return JSON.stringify({"status":200,"data":result});
        }else{
            return JSON.stringify({"status":400});
        }

     }catch (err) {
        console.log(err);
      }
}