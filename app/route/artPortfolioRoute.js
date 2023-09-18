const express = require('express')
const router = express()
const artPortfolio = require("../controller/artPortfolioController");
  
  
    // Create a new 
    router.post("/create", artPortfolio.create);
  
    // // Retrieve all 
    // router.get("/", artPortfolio.findAll);

  
    // // Retrieve a single  with id
    // router.get("/:id", s.findOne);
  
    // // Update a  with id
    // router.put("/:id", s.update);
  
    // // Delete a  with id
    // router.delete("/:id", s.delete);
  
    // // Delete all s
    // router.delete("/", s.deleteAll);
    module.exports = router


