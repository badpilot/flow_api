var config_default = {
    dialect: 'mysql',
    database: 'flow_api',
    username: 'root',
    password: '123456',
    host:'localhost',
    port:'3306'
};

var config_test = {
    dialect: 'mysql',
    database: 'flow_api_test',
    username: 'root',
    password: '123456',
    host:'localhost',
    port:'3306'
};

var config_override = {
    dialect: 'mysql',
    database: 'flow-api',
    username: 'root',
    password: '123456',
    host:'localhost',
    port:'3306'
};

const fs = require('fs');

var config = null;

if (process.env.NODE_ENV === 'test'){
    console.log(`Load ${config_test} ...`);
    config = config_test;
}else{
    console.log(`Load ${config_override}`);
    config = config_override;
    console.log(config);
}

module.exports = config;
