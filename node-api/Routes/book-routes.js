const express = require('express');

const { getAllBooks, getBookById, AddnewBook, UpdateBook, deleteBook } = require('../Controllers/book-controller');

//create express route
const router = express.Router();

//create routes for books

router.get('/get',getAllBooks);


router.get('/get/:id',getBookById);


router.post('/add',AddnewBook);

router.put('/update/:id',UpdateBook);

router.delete('/delete/:id',deleteBook);

module.exports = router;