/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      // type: DataTypes.DATE,
      // allowNull: false
      type: 'TIMESTAMP',
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transaction_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ss_document_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'documents',
        key: 'id'
      }
    },
    ss_users_profiles_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users_profiles',
        key: 'id'
      }
    }
  }, {
    tableName: 'transactions',
    timestamps: false,
    freezeTableName: true
  });
};
