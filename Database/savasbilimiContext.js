var sequelize = require('sequelize');
const seq = new sequelize('celil_','celil','YusufKral',{
    host:'91.151.90.223',
    dialect:'mariadb'
});

try {
    seq.authenticate();
} catch (error) {
    console.log(error);
}

module.exports = seq;