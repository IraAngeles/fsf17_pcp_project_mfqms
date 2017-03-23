/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_profiles', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'users_profiles'
  });
};
