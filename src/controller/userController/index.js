const user=require('../../mysqlHelper/user')

module.exports={
    register:async function(ctx){
        const response = await user.register()
        ctx.body=response
    },
    login:async function(){}
}