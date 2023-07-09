const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hey It's user route");
})

module.exports=router;