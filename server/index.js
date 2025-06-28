const express = require("express");
const fs = require("fs"); // For reading and writing files
const cors = require("cors"); // For enabling CORS

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON parsing using middleware
const DATA_PATH = "./data/submissions.json"; // Path to the JSON file

// Add new website data endpoint
app.post("/add_website", (req, res) => {
  const formData = req.body;

  fs.readFile(DATA_PATH, "utf8", (err, data) => {
    let existing = [];

    // If no error and data exists, parse it into an array
    if (!err && data) existing = JSON.parse(data);

    // Add the new form data to the array
    existing.push(formData);

    fs.writeFile(DATA_PATH, JSON.stringify(existing, null, 2), (err) => {
      if (err) return res.status(500).send("Failed to save data");

      res.send("Data saved");
    });
  });
});

// Website data retrieval endpoint
app.get("/view_website", (req, res) => {
  fs.readFile(DATA_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).send("Failed to read data");

    res.json(JSON.parse(data));
  });
});

module.exports = app;
