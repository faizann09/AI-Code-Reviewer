const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();

router.post("/get-review",(req,res)=>{
    const prompt = req.query.prompt;
    if(!prompt){
        return res.status(400).send("Prompt is Required");
    }
})


module.exports = router;   