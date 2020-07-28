module.exports = (sequelize, DataTypes) => {

    const BooksInventry = sequelize.define('BooksInventry', {
      bookId: {
        type: DataTypes.STRING,
      },
      copiesCount: {
        type: DataTypes.INTEGER,
      },
      issuedCount: {
        type: DataTypes.INTEGER,
      },
      avilableCount: {
        type: DataTypes.INTEGER,
      },
    })
  
    return BooksInventry
  }