/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attachments', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    summary_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'summaries',
        key: 'id'
      }
    }
  }, {
    tableName: 'attachments'
    , timestamps: false
    , freezeTableName: true
  });
};
