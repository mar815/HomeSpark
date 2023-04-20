const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
require('dotenv').config();

const QUANDL_API_KEY = process.env.QUANDL_API_KEY;

app.get('/interest_rate', async (req, res) => {
  const url = `https://www.quandl.com/api/v3/datasets/FRED/MORTGAGE30US?api_key=${QUANDL_API_KEY}`;

  try {
    const response = await axios.get(url);
    console.log('This is the response data: ', response.data);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching interest rate data: ${error}`);
    res.status(500).json({ error: 'Failed to fetch interest rate data' });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
