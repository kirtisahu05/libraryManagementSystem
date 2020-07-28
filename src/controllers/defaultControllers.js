const { Books, Members, IssuedBooks, BooksInventry } = require('../models');

module.exports = {
    async getBooks(req, res) {
        try {
            const books = await Books.findAll({})
            res.send(books)

        } catch (err) {
            res.status(400).send ({
                error: 'books not found'
            })
        }
    },

    async getAvilableBooks(req, res) {
        try {
            const booksInventry = await BooksInventry.findAll({})

            const avilableBooksIds = booksInventry.map(({ bookId, avilableCount }) => {
                if (avilableCount > 0) {
                    return bookId;
                }
            });

            const query = {
                where: {
                    id: {
                        $in: avilableBooksIds
                    }
                }
            }

            const avilableBooks = await Books.findAll(query)
            res.send(avilableBooks)

        } catch (err) {
            res.status(400).send ({
                error: 'something bad happened'
            })
        }
    },

    async getIssuedBooks(req, res) {
        try {
            const booksInventry = await BooksInventry.findAll({})

            const issuedBooksIds = booksInventry.map(({ bookId, issuedCount }) => {
                if (issuedCount > 0) {
                    return bookId;
                }
            });

            const query = {
                where: {
                    id: {
                        $in: issuedBooksIds
                    }
                }
            }

            const issuedBooks = await Books.findAll(query)
            res.send(issuedBooks)

        } catch (err) {
            res.status(400).send ({
                error: 'something bad happened'
            })
        }
    },

    async getBookByTitle (req, res) {
        try {
            const query = {
                where: {
                    title: req.params.title
                }
            }
            const book = await Books.findOne(query)

            const query = {
                where: {
                    bookId: book.id
                }
            }

            const BookInventry = await Books.findOne(query)
            book.isAvilable = BookInventry.avilableCount > 0 ? true : false;
            res.send(book)

        } catch (err) {
            res.status(400).send ({
                error: 'something bad happened'
            })
        }
    }
}