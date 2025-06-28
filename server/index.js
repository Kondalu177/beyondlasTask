const express = require("express");
const fs = require("fs"); // For reading and writing files
const path = require("path");
const cors = require("cors"); // For enabling CORS

const app = express();
app.use(cors());
app.use(express.json()); // Enable JSON parsing using middleware
const DATA_PATH = path.join(__dirname, "data", "submissions.json"); // Path to the JSON file

// Helper: Ensure file exists before reading/writing
function ensureFileExists(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, "[]", "utf8");
  }
}
// Add new website data endpoint
app.post("/add_website", (req, res) => {
  const formData = req.body;

  ensureFileExists(DATA_PATH);
  fs.readFile(DATA_PATH, "utf8", (err, data) => {
    let existing = [];

    // If no error and data exists, parse it into an array
    if (!err && data) {
      try {
        existing = JSON.parse(data);
      } catch (e) {
        return res.status(500).send("Corrupted data file");
      }
    }

    // Add the new form data to the array
    existing.push(formData);

    fs.writeFile(DATA_PATH, JSON.stringify(existing, null, 2), (err) => {
      if (err)
        return res.status(500).send("Failed to save data: " + err.message);

      res.send("Data saved successfully");
    });
  });
});

// Website data retrieval endpoint
app.get("/view_website", (req, res) => {
  fs.readFile(DATA_PATH, "utf8", (err, data) => {
    if (err) return res.status(500).send("Failed to read data: " + err.message);

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (e) {
      res.status(500).send("Corrupted data file");
    }
  });
});

module.exports = app;
