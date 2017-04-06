/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      // type: DataTypes.DATE,
      // allowNull: false
      type: 'TIMESTAMP',
      defaultValue: DataTypes.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },   
    document_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    problem_description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    problem_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    // attributes: {
    attr: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    field_impact: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: "0"
    },
    field_actions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    severity_level: {
      type: DataTypes.STRING(255),
      allowNull: true
    },    
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    archived_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'documents'
    , timestamps: false
    , freezeTableName: true
  });
};
