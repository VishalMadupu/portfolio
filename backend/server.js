require("dotenv").config(); // Ensure dotenv is loaded before any other imports
// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./models/contact");



const isProduction = process.env.NODE_ENV === "production";

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined. Check your environment variables.");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Port logic
// const PORT = process.env.PORT || 10000;

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
  host: process.env.EMAIL_HOST, // smtp-relay.brevo.com
  port: process.env.EMAIL_PORT, // 587
  secure: false, // TLS is used with STARTTLS, so this should be false
  auth: {
    user: process.env.EMAIL_USER, // 889997003@smtp-brevo.com
    pass: process.env.EMAIL_PASS, // the SMTP password
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
const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  if (isProduction && process.env.RENDER_URL) {
    console.log(`🌐 Production URL: ${process.env.RENDER_URL}`);
  }
});