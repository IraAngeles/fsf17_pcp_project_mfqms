/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('owners', {
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
    supplier: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    subtier: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    representative: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    design_origin: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ss_document_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'documents',
        key: 'id'
      }
    }
  }, {
    tableName: 'owners',
    timestamps: false,
    freezeTableName: true
  });
};
