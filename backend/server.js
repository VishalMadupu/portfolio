require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./models/contact");

const app = express();
app.use(express.json());
app.use(cors());

// Ensure MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Correct env variable
      pass: process.env.EMAIL_PASS, // Correct env variable
    },
  });
  

// API Route to Handle Contact Form Submission
app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    console.log("📩 Incoming Contact Request:", req.body); // Log incoming request
  
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }
  
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Request: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email Sent:", info.response); // Log success response
      res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("❌ Email Send Error:", error.message); // Log actual error
      res.status(500).json({ success: false, message: error.message });
    }
  });
  

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
