const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/SendEmail");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the Vite build
app.use('/client', express.static(path.join(__dirname, "dist")));

// Route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/api/sendemail", async (req, res) => {
  const { email, message, name } = req.body;

  try {
    const tmessage = `
        <h3>de ${name}</h3>
        <h3>a l'adresse ${email}</h3>
        <p> ${message} </p>
    `;

    await sendEmail(tmessage);
    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});