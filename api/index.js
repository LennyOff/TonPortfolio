const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendEmail = require("./utils/SendEmail");
const path = require("path");

const app = express()
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send(`Hey this is my API running 🥳 on port ${PORT}`)
})

app.post("/utils/sendemail", async (req, res) => {
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