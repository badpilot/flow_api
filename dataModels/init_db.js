const user = require('./user/userModel');
console.log(user);
for(let key in user){
    user[key].sync();
}

