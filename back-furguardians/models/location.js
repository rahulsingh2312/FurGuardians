const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create a schema for location data


const locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    name: String,
    email:String,
    image: {
      data: Buffer, // Store the image data as a Buffer
      contentType: String, // Store the image MIME type (e.g., 'image/jpeg')
    },
  
  });
  module.exports= mongoose.model('Location', locationSchema);
