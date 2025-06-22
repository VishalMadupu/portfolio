

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
  ac
  console.error("❌ MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ===================================================================
// THE FIX: Use Brevo's settings instead of the "gmail" service.
// This reads the host and port directly from your .env file.
// `secure: false` is required for port 587.
// ===================================================================
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // This is important for port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API Route to Handle Contact Form Submission
// app.post("/api/contact", async (req, res) => {
//   const { name, email, subject, message } = req.body;

//   console.log("📩 Incoming Contact Request:", req.body); // Log incoming request

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ success: false, message: "All fields are required!" });
//   }

//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: "vishalreddy4500@gmail.com", // The email address where you want to receive notifications
//     subject: `New Contact Form Submission: ${subject}`,
//     text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     html: `<p>You have a new message from your portfolio website.</p>
//            <h3>Contact Details</h3>
//            <ul>
//              <li><strong>Name:</strong> ${name}</li>
//              <li><strong>Email:</strong> ${email}</li>
//            </ul>
//            <h3>Message</h3>
//            <p>${message}</p>`,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("✅ Email Sent:", info.response); // Log success response
//     res.status(200).json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("❌ Email Send Error:", error); // Log the full error object for more detail
//     res.status(500).json({ success: false, message: "Failed to send the email. " + error.message });
//   }
// });
// Your updated API Route in your main server file

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("📩 Incoming Contact Request:", req.body);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  // Create a new contact document using the Mongoose model
  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "vishalreddy4500@gmail.com",
    subject: `New Contact Form Submission: ${subject}`,
    text: `You have a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p>You have a new message from your portfolio website.</p>...`, // Your HTML here
  };

  try {
    // Step 1: Save the contact to the database
    const savedContact = await newContact.save();
    console.log("✅ Data Saved to MongoDB:", savedContact);

    // Step 2: Send the confirmation email
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent:", info.response);

    // Step 3: Send a success response
    res.status(200).json({ success: true, message: "Message sent and saved successfully!" });

  } catch (error) {
    console.error("❌ Error during contact submission:", error);
    res.status(500).json({ success: false, message: "An error occurred. Please try again." });
  }
});
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));