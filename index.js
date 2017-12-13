const util=require('./util/util.js');

const express=require('express');

express.get('/',(req,res)=>{
    res.send({"name":"jobayer","Address":"Bogra ,Rajshahi,Bangladesh"});
});


express.listen(process.env.PORT);