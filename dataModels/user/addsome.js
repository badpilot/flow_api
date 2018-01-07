//添加一些实例
const user = require('./userModel');
console.log(user);

var pan =  user.User.create({
    user_id: '',
    user_name: 'pan',
    user_real_name: 'pan',
    user_role_id: '1',
    user_password: '123456',
    user_department: 'test'
});

var pan =  user.User.create({
    user_id: '',
    user_name: 'root',
    user_real_name: 'root',
    user_role_id: '1',
    user_password: '123456',
    user_department: 'test'
});
console.log(pan);
