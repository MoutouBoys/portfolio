// server.js
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // Charge .env

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DEBUG: affiche si les variables d'env sont chargées
console.log("DEBUG: EMAIL_USER =", process.env.EMAIL_USER ? process.env.EMAIL_USER : "undefined");
console.log("DEBUG: EMAIL_PASS loaded? ", process.env.EMAIL_PASS ? "yes" : "no");

// Servir fichiers statiques (index.html, css, js, images)
app.use(express.static(path.join(__dirname)));

// Routes pour index.html (optionnel — express.static suffit normalement)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint pour recevoir le formulaire
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Tous les champs sont requis." });
  }

  // Vérification des variables d'environnement
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing EMAIL_USER or EMAIL_PASS in environment.");
    return res.status(500).json({ success: false, message: "Configuration mail manquante sur le serveur." });
  }

  // Transporter Nodemailer (Gmail)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // mot de passe d'application Google
    },
  });

  // Construire le mail
  let mailOptions = {
    from: process.env.EMAIL_USER, // mettre l'adresse authentifiée ici
    to: process.env.EMAIL_USER,   // réception dans la même boite (ou autre adresse)
    subject: `Nouveau message de ${name}`,
    // inclure l'email du visiteur dans replyTo pour pouvoir répondre facilement
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent:", info.response);
    res.json({ success: true, message: "✅ Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur Nodemailer :", error);
    // retourne un message utile côté client mais sans exposer les détails sensibles
    res.status(500).json({ success: false, message: "❌ Erreur lors de l'envoi du mail. Voir la console serveur." });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
