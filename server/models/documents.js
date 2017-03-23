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
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false
    },   
    document_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    problem_description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    problem_status: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    attributes: {
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
  });
};
