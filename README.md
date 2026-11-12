
Issue 1

• Title: Create the books collection and connect the app to MongoDB
• Description:
markdown
# Description
Create the `cse341-books-db` database and `books` collection in MongoDB Atlas, seed it with initial book documents, and configure the local application to connect to MongoDB using environment variables.

# Tasks
- Create a feature branch (`connect-to-mongodb`)
- Create the `cse341-books-db` database and `books` collection in MongoDB Atlas
- Insert at least 3 book documents (`b1`, `b2`, `b3`) with `id`, `author`, `title`, and `publicationDate`
- Add `MONGODB_DB_NAME=cse341-books-db` to `.env`
- Verify database connection in `server.js` and remove temporary console logging code

# Test Plan
- The `cse341-books-db` database exists.
- The `books` collection exists with at least 3 documents.
- Each book document includes `id`, `author`, `title`, and `publicationDate`.
- Local app can connect to MongoDB without connection errors.
- Connection values are stored using environment variables (no secrets committed).
Use code with caution.

Issue 2

• Title: Implement a route to retrieve all books
• Description:
markdown
# Description
Implement the `GET /books` endpoint using the MVC pattern (Model, Controller, Router) to retrieve and return all book documents from MongoDB as JSON.

# Tasks
- Create a feature branch (`add-get-books-route`)
- Create `getAllBooks` model function in `src/models/books.js`
- Create `getBooksHandler` controller function in `src/controllers/books.js`
- Set up `GET /books` route in `src/router.js`
- Connect the router in `app.js` and clean up old practice routes

# Test Plan
- `GET /books` returns an array in JSON.
- Response status is 200 on success.
- Each returned book includes `id`, `author`, `title`, and `publicationDate`.
- Response uses `application/json`.
- Unexpected failures return `{ "message": "Internal server error" }` with status 500.
Use code with caution.

Issue 3

• Title: Implement a route to retrieve one book by id
• Description:
markdown
# Description
Implement the `GET /books/:id` endpoint using the MVC pattern to retrieve a single book by its custom `id` field, returning a 200 status when found or a 404 status when missing.

# Tasks
- Create a feature branch (`get-book-by-id`)
- Add `getBookById` model function in `src/models/books.js`
- Add `getBookByIdHandler` controller function in `src/controllers/books.js`
- Add `GET /books/:id` route in `src/router.js`

# Test Plan
- An existing id returns one book object in JSON.
- The returned book includes `id`, `author`, `title`, and `publicationDate`.
- A missing id returns `{ "message": "Book not found" }` with status 404.
- Response status is 200 on success.
- Response uses `application/json`.
- Unexpected failures return `{ "message": "Internal server error" }` with status 500.
Use code with caution.

Issue 4

• Title: Deploy and test the application
• Description:
markdown
## Description
Configure environment variables on Render, allow Render's outbound IP addresses in MongoDB Atlas Network Access, and verify that all deployed API endpoints work properly in production.

# Tasks
- Add `MONGODB_URI` and `MONGODB_DB_NAME` environment variables on Render.com
- Add Render outbound IP address ranges to MongoDB Atlas IP Access List
- Verify deployment build logs and test live endpoints

# Test Plan
- Deployed `GET /books` returns an array with status 200.
- Deployed `GET /books/:id` returns a book for an existing id with status 200.
- Deployed `GET /books/:id` returns 404 for a missing id.
- Deployed not-found and server-error responses return safe JSON messages.
- The final deployed URL is recorded in the README or in an issue comment.