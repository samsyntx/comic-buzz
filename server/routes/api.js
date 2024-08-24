const express = require('express');
const router = express.Router();
const googleBooksAPIs = require('./googleBooksApis.js');

// Use the imported routes
router.use(googleBooksAPIs);

/**
 * @swagger
 * /get-books-api:
 *   get:
 *     summary: Get a list of books
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Book Title"
 *                   author:
 *                     type: string
 *                     example: "Author Name"
 */

router.get('/get-books-api', (req, res) => {
    const books = [
        { id: 1, title: '1984', author: 'George Orwell' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
    ];
    res.status(200).json(books);
});



module.exports = router;
