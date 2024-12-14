// Import necessary modules
import express from 'express';
import cors from 'cors'; 
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors()); // Add CORS middleware

app.use(express.json()); // To parse JSON request body

// Create OAuth2 client
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// POST route to handle form submissions and send email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body; // Get data from the contact form

    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });

    const mailOptions = {
      from: `${name} <${process.env.EMAIL_USER}>`, // Still your email as Gmail enforces this
      to: process.env.EMAIL_USER, // Your email to receive messages
      subject: `New message from ${name}`, // Subject line with user's name
      text: `You received a message from ${name} (${email}):\n\n${message}`, // The email content
      replyTo: email, // This ensures replies go to the user
    };
      
      

    const result = await transporter.sendMail(mailOptions);
    console.log(result);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
