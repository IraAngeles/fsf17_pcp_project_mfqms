/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('summaries', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    create_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_at: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    summary: {
      type: "LONGBLOB",
      allowNull: false
    },
    ss_document_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'documents',
        key: 'id'
      }
    }
  }, {
    tableName: 'summaries'
  });
};
