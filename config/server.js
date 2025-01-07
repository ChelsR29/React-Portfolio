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
  origin: [
    'https://main--chelsea-react-portfolio.netlify.app', // Production
    'http://localhost:3000', // Development
  ],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true,
};
app.options('*', cors(corsOptions)); // Handle all preflight requests



// To parse JSON request body
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, '../')));

// OAuth2 Client Setup
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// POST Route: Handle form submissions and send email
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    const accessToken = await oAuth2Client.getAccessToken().catch((err) => {
      console.error('Access token error:', err);
      throw new Error('Failed to generate access token');
    });

    if (!accessToken || !accessToken.token) {
      throw new Error('Access token is null or undefined');
    }

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
      from: `${name} <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `You received a message from ${name} (${email}):\n\n${message}`,
      replyTo: email,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error in /send-email:', error); // Log detailed error
    res.status(500).json({ message: 'Failed to send email', error: error.message });
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
