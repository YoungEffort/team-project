const register=require('../../db/user')

module.exports={
    register:async function(ctx){
        const response = await register()
        ctx.body=response
    },
    login:async function(){}
}