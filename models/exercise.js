module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    Exercise: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    URL: DataTypes.STRING
  });
  return Exercise;
};
