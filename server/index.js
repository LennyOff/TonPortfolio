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

// Commentez ou supprimez la ligne suivante pour désactiver la gestion des fichiers statiques du client
// app.use('/client', express.static(path.join(__dirname, "dist")));

// Route
app.get("/", (req, res) => {
  // Commentez ou supprimez la ligne suivante pour désactiver l'envoi du fichier index.html
  // res.sendFile(path.join(__dirname, "dist", "index.html"));
  res.send("Hello, Server!"); // Envoyez simplement une réponse pour tester le serveur sans le client
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
