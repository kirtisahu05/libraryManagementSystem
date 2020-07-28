module.exports = (sequelize, DataTypes) => {

    const Books = sequelize.define('Books', {
      id: {
        type: DataTypes.STRING,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      subject: {
        type: DataTypes.STRING,
      },
      auther: {
        type: DataTypes.STRING,
      },
      publicationYear: {
        type: DataTypes.STRING,
      }
    })
  
    return Books
  }