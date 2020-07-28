module.exports = (sequelize, DataTypes) => {

    const IssuedBooks = sequelize.define('IssuedBooks', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
      },
      bookId: {
        type: DataTypes.STRING,
      },
      membershipNumber: {
        type: DataTypes.STRING,
      },
      memberId: {
        type: DataTypes.STRING,
      },
      issuedDate: {
        type: DataTypes.STRING,
      },
      dueDate: {
        type: DataTypes.STRING,
      }
    })
  
    return IssuedBooks
  }