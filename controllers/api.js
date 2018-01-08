const userMethods = require('../dataModels/user/userMethod')
module.exports = {
    'GET /api/getUserIdByNames/:user_id':async(ctx,next) =>{
        
        let user_name = ctx.params.user_name;
        ctx.response.type='application/json';
        ctx.response.body = userMethods.getUserIdByName(user_name);
        //return userMethods.getUserIdByName(user_name);
    },

    'GET /api/test': async(ctx,next) =>{
        ctx.response.type='application/json';
        ctx.response.body = 'p';
    }
}