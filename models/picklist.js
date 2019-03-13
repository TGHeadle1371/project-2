module.exports = function(sequelize, DataTypes) {
  var Picklist = sequelize.define("Picklist", {
    Collection: DataTypes.STRING,
    AttributeName: DataTypes.STRING,
    Value: DataTypes.STRING
  });
  return Picklist;
};
