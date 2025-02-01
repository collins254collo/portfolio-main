const express = require("express");
const nodemon = require("nodemon");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com", // Correct hostname
  port: 587, // Port for TLS
  secure: false, // Use TLS (not SSL)

  auth: {
    user: "njogucollins10397@gmail.com",
    pass: "mjkz gufd tirf tmmp",
  },
});

app.post("/send_email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: `${name}`,
    to: "wamiatucollins@gmail.com",
    subject: `Email from ${name} `,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen("3000", console.log("listening to the port"));
