const send_grid_api = require("@sendgrid/mail");


module.exports.SendGridEmail = async function(event, context, payload){

    send_grid_api.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
        to:[
                {
                    email: payload.email,
                    name: payload.fullName
                }],
        dynamic_template_data: {
                FullName: payload.fullName
        },
        from:{
                email: 'admin@jsii.page',
                name: 'JSII'
        },
        template_id: process.env.TEMPLATE_ID

    };

    return send_grid_api.send(msg);
};
