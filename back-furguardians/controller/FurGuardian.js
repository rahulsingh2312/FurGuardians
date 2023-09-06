const Location = require("../models/location");
const mongoose = require("mongoose");

 exports.show = async function show(req,res){
  console.log("hi");
  try {
    // Use the await keyword to asynchronously fetch all documents from the Location collection
    const locations = await Location.find({});
    res.json(locations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving location data' });
  }
  
};


exports.add = async function addFurGuardian(req,res){
  console.log(req.body);
  try {
    const { latitude,longitude,name , email ,image } = req.body; // Assuming you're sending name, email, and userLocation in the request body

    // Create a new location document using your Mongoose model
    const newLocation = new Location({
      latitude: latitude,
      longitude: longitude,
      name : name,
      email : email,
      image: {
        data: image.data, 
        contentType: image.contentType, 
      },

      // You can also store other fields such as imageLink
    });

    // Save the new location document to the database
    await newLocation.save();

    // You can also handle the name and email data as needed

    // Respond with a success message or status code
    res.status(201).json({ message: 'Location added successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }

};