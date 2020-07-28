module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
      memberId: {
        type: DataTypes.STRING,
        unique: true,
      },
      membershipNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      issueBookLimit: {
        type: DataTypes.INTEGER,
      },
      issueDayLimit: {
        type: DataTypes.INTEGER,
      }
    })
  
    return Users
  }