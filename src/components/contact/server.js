// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to send email
app.post('/send-email', (req, res) => {
  const { username, phoneNumber, email, subject, message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kipngenokirwa9@gmail.com', // Your email address
      pass: 'Faith202#'     // Your email password or App Password
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'kipngenokirwa9@gmail.com', // Your receiving email
    subject: subject,
    text: `From: ${username} (${phoneNumber}, ${email})\n\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({ message: 'Error sending email', error });
    }
    return res.status(200).send({ message: 'Email sent successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
