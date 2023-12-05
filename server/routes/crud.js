const express = require("express");
const router = express.Router(); 
const { create, read, update, remove} = require("../controller/crud"); 

router.post("/add", create); 
router.get("/read",read );
router.put("/task/:id",update);
router.delete("/task/:id",remove);


module.exports = router;