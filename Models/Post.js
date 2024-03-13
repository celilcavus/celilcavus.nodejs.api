var context = require('../Database/savasbilimiContext');
const { DataTypes } = require('sequelize');
module.exports = context.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    source:DataTypes.STRING,
    isActive:DataTypes.BOOLEAN
})