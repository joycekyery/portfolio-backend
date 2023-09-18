const { Binary } = require("mongodb");

module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "artPortfolio",
      mongoose.Schema(
        {
          title: String,
          description: String,
          year: Number,
          image_base64: String,
          cols:Number,
          rows:Number
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };