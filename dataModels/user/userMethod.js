const user = require('./userModel');
//var sequelize = require('./userModel');
var sequelize = user.sequelize;
module.exports = {
    'getUserIdByName(user_name)': sequelize.query('select user_id from User where user_name = ?',
        [options={replacements: ['user_name']},{model:user.User}]).then(
            function(user_id){
                console.log(user_id);
                return user_id;
            }
        )
}