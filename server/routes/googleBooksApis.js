const express = require('express');
const router = express.Router();
const axios = require('axios');

const apiKey = process.env.GOOGLE_BOOKS_API_KEY; 

// Define a GET route for getting books
router.get('/books', async (req, res) => {
  const { query } = req.query; 
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: query,
        key: apiKey,
      },
    });

    const books = response.data.items;
    res.status(200).json({ books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching books' });
  }
});

module.exports = router;