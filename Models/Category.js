const context = require('../Database/savasbilimiContext');
const {DataTypes} = require('sequelize');
module.exports = category =context.define('category',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,   
    },
    name:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN
})