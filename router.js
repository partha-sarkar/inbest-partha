const express = require('express');
const router = express.Router();
const authMiddleware = require('./middleware/auth.middleware');

//call controllers
//const users = require('./controller/users.controller');
const rfq_home_controller = require('./controller/rfq_home.controller');
const rfq_cpm_controller = require('./controller/rfq_cpm.controller');
const rfq_fire_controller = require('./controller/rfq_fire.controller');
const rfq_burglary_controller = require('./controller/rfq_burglary.controller');
const rfq_personal_accident_ctrl = require('./controller/rfq_personal_accident.controller');
const rfq_helth_ctrl = require('./controller/rfq_health.controller');
const rfq_product_liablity = require('./controller/rfq_product_liablity.controller');
const rfq_travel = require('./controller/rfq_travel.controller');
const rfq_two_wheeler = require('./controller/rfq_two_wheeler.controller');


router.post('/create_rfq_home',async (req,res)=>{    
    const result = await rfq_home_controller.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_cpm',async (req,res)=>{    
    const result = await rfq_cpm_controller.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_fire',async (req,res)=>{    
    const result = await rfq_fire_controller.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_burglary',async (req,res)=>{    
    const result = await rfq_burglary_controller.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_personal_accident',async (req,res)=>{
    const result = await rfq_personal_accident_ctrl.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});


router.post('/create_rfq_health',async (req,res)=>{
    const result = await rfq_helth_ctrl.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_product_liability',async (req,res)=>{
    const result = await rfq_product_liablity.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_travel',async (req,res)=>{
    const result = await rfq_travel.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});

router.post('/create_rfq_two_wheeler',async (req,res)=>{
    const result = await rfq_two_wheeler.create(req.body);    
    res.setHeader('Content-Type', 'application/json');
    res.send(result); 
});









/*
router.get('/',authMiddleware,(req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"status":200})); 

});


//login POST
router.post('/login',async (req,res)=>{
    try{
        const tempObjUser = await users.loginSubmit(req.body);
        let ObjUser = JSON.parse(tempObjUser);
        res.setHeader('Content-Type', 'application/json');
        res.status(ObjUser.status);
        res.send(ObjUser);

    }catch (err) {
        console.log(err);
    }   

});

router.post('/verifytoken',authMiddleware,async (req,res)=>{
    try{
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({"status":200})); 

    }catch (err) {
        console.log(err);
    }   
});

*/

module.exports = router;
