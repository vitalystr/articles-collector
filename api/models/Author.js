/**
 * Author.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    // id в mysql базе    
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    // id в базе vk, tw, fb
    src_id: {
      type: Sequelize.STRING,
      allowNull: true,
      // validate: {
      //   isNumeric: true
      // }    
    },
    // имя автора    
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // адрес страницы автора
    url: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    // общее количество друзей или follower'ов
    friends_count: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    // откуда автор (тип источника)
    src_type: {
      type: Sequelize.ENUM,
      values: ['vk', 'tw', 'fb'],
      allowNull: false
    }

  },

  options: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    freezeTableName: false,
    tableName: 'authors'
  },
  
  indexes: {
    unique: true,
    fields: ['src_id']
  }
    
};

