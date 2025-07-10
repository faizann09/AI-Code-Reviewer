const express = require('express');

const router = express.Router();

router.post("/get-review",(req,res)=>{
    const prompt = req.query.prompt;
    if(!prompt){
        return res.status(400).send("P")
    }
})


module.exports = router;   