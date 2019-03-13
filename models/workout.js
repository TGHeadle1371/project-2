module.exports = function(sequelize, DataTypes) {
  var WorkOut = sequelize.define("WorkOut", {
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Weight: DataTypes.INTEGER,
    Sets: DataTypes.INTEGER,
    HeartRate: DataTypes.INTEGER,
    Duration: DataTypes.INTEGER,
    Distance: DataTypes.INTEGER,
    Intensity: DataTypes.STRING
  });

  WorkOut.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    WorkOut.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    WorkOut.belongsTo(models.Exercise, {
      foreignKey: {
        allowNull: false
      }
    });

    WorkOut.belongsTo(models.Picklist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return WorkOut;
};
