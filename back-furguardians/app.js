const express = require('express');
const mongoose = require('mongoose');
// const multer = require('multer');
var path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;


// Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));
const FurGuardianRouter = require('./routes/furguardian')
// Connect to MongoDB
// Connect to MongoDB
mongoose.connect("mongodb+srv://1032220260:VCmF7DwTRLgbjLqy@cluster0.ywlcyql.mongodb.net/Furguardian", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });



  app.use("/FurGuardian", FurGuardianRouter);

// Set up Multer for handling image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });


// Create an API endpoint for uploading images
// app.post('/api/images', upload.single('image'), (req, res) => {
//   const imageUrl = req.file.path;

  // You can save imageUrl in your database or cloud storage here.

//   res.json({ message: 'Image uploaded successfully', imageUrl });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
