// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 5001;

app.get('/api/guest-token', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:8088/api/v1/security/login', {
      username: 'admin',
      password: 'admin',
    });
    const token = response.data.access_token;
    console.log('token', token);
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error fetching token');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
