const db = require("../model");
const ArtPortfolio = db.artPortfolio;

// Create and Save 
exports.create = (req, res) => {
    
  // Create 
  const portfolio = new ArtPortfolio({
    title: req.body.title,
    description: req.body.description,
    year: req.body.year,
    image_base64: req.body.image,
    cols:req.body.cols,
    rows:req.body.rows,
  });

  // Save to the database
  portfolio
    .save(portfolio)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the image."
      });
    });
};

// Retrieve all 
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  ArtPortfolio.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

// Find a single 
exports.findOne = (req, res) => {
  
};

// Update  by the id in the request
exports.update = (req, res) => {
  
};

// Delete  with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all  from the database.
exports.deleteAll = (req, res) => {
  
};
