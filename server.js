const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let certifications = [];

const users = [
  { email: "user@gmail.com", password: "123456", role: "user" },
  { email: "admin@gmail.com", password: "admin123", role: "admin" }
];

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false });
  }
});

// Add certification
app.post("/add-certification", (req, res) => {
  const newCert = { id: uuidv4(), ...req.body };
  certifications.push(newCert);
  res.json(newCert);
});

// Get certifications
app.get("/certifications", (req, res) => {
  res.json(certifications);
});

// Delete certification
app.delete("/certifications/:id", (req, res) => {
  certifications = certifications.filter(c => c.id !== req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});