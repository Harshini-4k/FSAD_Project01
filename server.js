const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let certifications = [];

// Users storage
let users = [
  { email: "user@gmail.com", password: "123456", role: "user", fullName: "Demo User" },
  { email: "admin@gmail.com", password: "admin123", role: "admin", fullName: "Admin" }
];


// ================= REGISTER API =================
app.post("/register", (req, res) => {
  const { fullName, email, password, role } = req.body;

  const existingUser = users.find((u) => u.email === email);

  if (existingUser) {
    return res.json({ success: false, message: "User already exists" });
  }

  const newUser = {
    id: uuidv4(),
    fullName,
    email,
    password,
    role
  };

  users.push(newUser);

  res.json({
    success: true,
    message: "Account created successfully",
    user: newUser
  });
});


// ================= LOGIN API =================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});


// ================= ADD CERTIFICATION =================
app.post("/add-certification", (req, res) => {
  const newCert = { id: uuidv4(), ...req.body };
  certifications.push(newCert);
  res.json(newCert);
});


// ================= GET CERTIFICATIONS =================
app.get("/certifications", (req, res) => {
  res.json(certifications);
});


// ================= DELETE CERTIFICATION =================
app.delete("/certifications/:id", (req, res) => {
  certifications = certifications.filter(c => c.id !== req.params.id);
  res.json({ message: "Deleted" });
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});