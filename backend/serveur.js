const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
const imaps = require("imap-simple");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Utilisez CORS middleware
app.use(cors());
// Créer une connexion à la base de données
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "repair_cafe",
});

// Établir la connexion
connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err);
    return;
  }

  console.log("Connecté à la base de données MySQL");
});
// pour recevoir les emails
const config = {
  imap: {
    user: "freddelan59450@gmail.com",
    password: "paradoxe0311",
    host: "imap.gmail.com",
    port: 993,
    tls: true,
  },
};

// Route POST pour envoyer un e-mail
app.post("/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  // Configurer le contenu de l'e-mail
  const mailOptions = {
    from: email,
    to: "freddelan59450@gmail.com",
    subject: subject,
    text: `De: ${name}\nEmail: ${email}\n\n${message}`,
  };

  imaps.connect(config).then((connection) => {
    return connection.openBox("INBOX").then(() => {
      const searchCriteria = ["UNSEEN"];
      const fetchOptions = {
        bodies: ["HEADER.FIELDS (FROM TO SUBJECT DATE)"],
        markSeen: true,
      };

      return connection.search(searchCriteria, fetchOptions).then((results) => {
        results.forEach((message) => {
          const from = message.parts[0].body.from;
          const to = message.parts[0].body.to;
          const subject = message.parts[0].body.subject;
          const date = message.parts[0].body.date;

          // Traitez l'e-mail ici
          console.log("Nouvel e-mail reçu :", { from, to, subject, date });
        });
      });
    });
  });
  // Configurer le service d'e-mail (nodemailer)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "freddelan59450@gmail.com",
      pass: "paradoxe0311",
    },
  });
  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Erreur lors de l'envoi de l'e-mail");
    } else {
      console.log("E-mail envoyé : " + info.response);
      res.status(200).send("E-mail envoyé avec succès");
    }
  });
});

// ... Autres déclarations et configurations ...

// Route POST pour gérer les données du formulaire
app.post("/submit-form", (req, res) => {
  console.log("Requête reçue sur /submit-form");
  // Récupérez les données du formulaire depuis le corps de la requête
  const formData = req.body;

  // Effectuez les opérations nécessaires avec les données du formulaire
  console.log("Données du formulaire reçues :", JSON.stringify(formData));

  // Définir la requête d'insertion ici avec formData
  const insertQuery =
    "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";
  connection.query(
    insertQuery,
    [formData.name, formData.email, formData.message],
    (error, results) => {
      // Gérer les erreurs et résultats ici
      if (error) {
        console.error(
          "Erreur lors de l'insertion dans la base de données :",
          error
        );
        res.status(500).json({
          error: "Erreur lors de l'insertion dans la base de données",
        });
      } else {
        console.log("Données insérées avec succès dans la base de données");
        res
          .status(200)
          .json({ message: "Données du formulaire reçues avec succès." });
      }
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
