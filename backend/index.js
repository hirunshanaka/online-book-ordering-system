const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

//multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "uploads";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// MongoDB connection
const uri = "mongodb://localhost:27017";
const dbName = "test001";
let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    db = client.db(dbName);
  })
  .catch((error) => console.error("Could not connect to MongoDB", error));


const validateUserInput = (data, forLogin = false) => {
  const { FirstName, LastName, UserName, PhoneNumber, Email, Password } = data;

  if (forLogin) {
    if (!UserName || !Password) {
      return { valid: false };
    }
  } else {
    if (!FirstName || !LastName || !UserName || !PhoneNumber || !Email || !Password) {
      return { valid: false };
    }
  }

  return { valid: true };
};

//  handle login
app.post('/login', (req, res) => {
  const { UserName, Password } = req.body;

  const validation = validateUserInput(req.body, true);
  if (!validation.valid) {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  // MongoDB query
  const collection = db.collection('register');
  collection.findOne({ UserName, Password })
    .then((user) => {
      if (user) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'login failed' });
      }
    })
    .catch((error) => {
      console.error('Login query error:', error);
      res.status(500).json({ success: false, message: 'Database error' });
    });
});

//  handle registration
app.post('/register', (req, res) => {
  const { FirstName, LastName, UserName, PhoneNumber, Email, Password } = req.body;

  const validation = validateUserInput(req.body);
  if (!validation.valid) {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }

  // MongoDB query
  const collection = db.collection('register'); 
  collection.insertOne({ FirstName, LastName, UserName, PhoneNumber, Email, Password })
    .then((result) => {
      if (result.insertedId) {
        console.log('User registered:', result.insertedId);
        res.json({ success: true });
      } else {
        console.log('Failed to register user');
        res.status(500).json({ success: false, message: 'Registration failed' });
      }
    })
    .catch((error) => {
      console.error('Registration query error:', error);
      res.status(500).json({ success: false, message: 'Database error' });
    });
});


//  handle book uploads
app.post("/upload-book", upload.single("fileupload"), async (req, res) => {
  const { bookTitle, authorName, category, bookDescription, price } = req.body;
  const fileupload = req.file ? req.file.filename : null; 
  try {
    const result = await db.collection("books").insertOne({
      bookTitle,
      authorName,
      fileupload,
      category,
      bookDescription,
      price,
    });
    res.status(201).send({ message: "Book uploaded successfully!", bookId: result.insertedId });
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).send({ message: "Error uploading book", error });
  }
});


//  get all books
app.get("/all-books", async (req, res) => {
  try {
    const books = await db.collection("books").find().toArray();
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send({ message: "Error fetching books", error });
  }
});

app.use("/uploads", express.static("uploads"));

// delete a book by ID
app.delete("/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.collection("books").deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 1) {
      res.status(200).send({ message: "Book deleted successfully!" });
    } else {
      res.status(404).send({ message: "Book not found!" });
    }
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send({ message: "Error deleting book", error });
  }
});



//  edit a book by ID
app.put("/book/:id", async (req, res) => {
  const { id } = req.params;
  const { bookTitle, authorName, fileupload, category, bookDescription,price } = req.body; 
  try {
    const result = await db.collection("books").updateOne(
      { _id: new ObjectId(id) },
      { $set: { bookTitle, authorName, fileupload, category, bookDescription,price } }
    );

    if (result.modifiedCount === 1) {
      res.status(200).send({ message: "Book updated successfully!" });
    } else {
      res.status(404).send({ message: "Book not found!" });
    }
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send({ message: "Error updating book", error });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
