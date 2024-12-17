// Import necessary modules
import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for `__dirname` in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for frontend
const corsOptions = {
  origin: ['https://main--chelsea-react-portfolio.netlify.app'], // Allow production frontend
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// To parse JSON request body
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../')));

// OAuth2 Client Setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI // Should point to your production backend
);

// Route: OAuth2 Callback (Handle Google Redirect)
app.get('/oauth2callback', async (req, res) => {
  try {
    const code = req.query.code; // Get authorization code
    if (!code) {
      return res.status(400).send('Authorization code is missing.');
    }

    // Exchange code for tokens
    const { tokens } = await oAuth2Client.getToken(code);
    console.log('Tokens:', tokens);

    // Log or save the tokens (refresh_token and access_token)
    res.send('Authorization successful! Copy the refresh token from the logs.');

    // Log tokens to manually update your .env or Heroku vars
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
  } catch (error) {
    console.error('Error during OAuth2 callback:', error);
    res.status(500).send('Failed to authenticate.');
  }
});

// POST Route: Handle form submissions and send email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Set credentials for OAuth2 client
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken();

    if (!accessToken.token) {
      console.error('Failed to generate access token');
      return res.status(500).json({ message: 'Failed to authenticate with Google' });
    }

    console.log('Access Token:', accessToken.token);

    // Nodemailer Transporter
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

    // Email options
    const mailOptions = {
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
      replyTo: email,
    };

    // Send Email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

// Default route to serve the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
