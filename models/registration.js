module.exports = function (sequelize, DataTypes) {
  var UserRegistration = sequelize.define("UserRegistration", {
    userName: DataTypes.TEXT,
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT
  });
  return UserRegistration;
};