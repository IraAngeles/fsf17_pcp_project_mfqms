/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_affected', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    part_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    part_number_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    model_type_number: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    machine_code_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fru_part_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    asm: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ffbm_part_number: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    feature_code: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
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
    tableName: 'products_affected'
    ,timestamps: false
    , freezeTableName: true
    , sync : {force: true}    
  });
};
