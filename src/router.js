import express from 'express';
import { getBooksHandler } from './controllers/books.js';
//import { getAllAuthors } from './controllers/authors.js';
import {
	getAllAuthors,
	getAuthorById,
	createAuthor,
	updateAuthor,
	deleteAuthor,
} from './controllers/authors.js';

const router = express.Router();

router.get('/books', getBooksHandler);
router.get('/authors', getAllAuthors);

export default router;