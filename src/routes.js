const controller = require('./controllers/defaultControllers')

module.exports = (app) {
    app.get('/allBooks', controller.getBooks)
    app.get('/avilableBooks', controller.getAvilableBooks)
    app.get('/issuedBooks', controller.getIssuedBooks)
    app.get('/bookByTitle/:title', controller.getBookByTitle)
}