module.exports = function(sequelize, DataTypes) {
  var WorkOut = sequelize.define("WorkOut", {
    Date: {
      type: DataTypes.Date,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    Weight: DataTypes.INT,
    Sets: DataTypes.INT,
    HeartRate: DataTypes.INT,
    Duration: DataTypes.INT,
    Distance: DataTypes.INT,
    Intensity: DataTypes.String
  });

  WorkOut.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    WorkOut.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  WorkOut.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    WorkOut.belongsTo(models.Exercise, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  WorkOut.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    WorkOut.belongsTo(models.Picklist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return WorkOut;
};
