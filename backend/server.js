require("dotenv").config(); // Load .env variables early

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Contact = require("./models/contact");

const app = express();
app.use(express.json());
app.use(cors());

// Check environment
const isProduction = process.env.NODE_ENV === "production";

// MongoDB URI
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // e.g., smtp-relay.brevo.com
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("📩 Incoming Contact Request:", req.body);

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required!" });
  }

  try {
    // Save to MongoDB
    const saved = await Contact.create({ name, email, subject, message });
    console.log("✅ Contact saved to MongoDB:", saved);

    // Send email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // ✅ verified domain
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER, // Your email inbox
      replyTo: email, // So you can click "Reply" to message Mahesh
      subject: `New Contact Request: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email Sent:", info.response);

    res
      .status(200)
      .json({ success: true, message: "Contact saved and email sent!" });
  } catch (error) {
    console.error("❌ Error in submission:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  if (isProduction && process.env.RENDER_URL) {
    console.log(`🌐 Production URL: ${process.env.RENDER_URL}`);
  }
});
