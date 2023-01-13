const express = require('express');
const router = express.Router();

router.get(["/","/home"],(req,res)=>{
    res.render('home');
})

router.get("/second",(req,res)=>{
    res.render('second');
})

router.get("/third",(req,res)=>{
    res.render('third');
})

router.get("/thankyou",(req,res)=>{
    res.render('thankyou');
})

// This pages.js file exports to express
module.exports = router;