
const config  = require('.../config');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 3000
    }
});

//user
var User = sequelize.define('User',{
    user_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    user_name: {type: Sequelize.STRING(50), allowNull: false},
    user_real_name: {type: Sequelize.STRING(50), allowNull: true},
    user_role_id: {type: Sequelize.INTEGER, allowNull: false},
    user_password: {type: Sequelize.STRING(50), allowNull: false},
    user_department: {type: Sequelize.STRING(50), allowNull: false}
});
//角色
var Role = sequelize.define('Role',{
    role_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, },
    role_name: {type: Sequelize.STRING(50), allowNull: false}
});
//权限模块
var Access_Module = sequelize.define('Access_Module',{
    module_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    module_name: {type: Sequelize.STRING(50), allowNull:false},
    module_description: {type: Sequelize.STRING(50), allowNull: false}
});
//角色-权限模块-权限
var Role_Module_Access = sequelize.define('Role_Module_Access',{
    access_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, unique: true},
    access_name: {type: Sequelize.STRING(50), allowNull: false},
    module_id: {type: Sequelize.INTEGER, allowNull: false},
    module_name: {type: Sequelize.STRING(50), allowNull: false}
});

module.exports = {};
var user_tablemap = {
    "User": User,
    "Role": Role,
    "Access_Module": Access_Module,
    "Role_Module_Access": Role_Module_Access
};
for(let key of user_tablemap){
    key.sync();
    module.exports[key] = user_tablemap.key;
}