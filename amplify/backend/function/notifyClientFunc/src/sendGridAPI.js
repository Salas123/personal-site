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
        template_id: 'd-a0dc6191b9664a17bada8d6636709ba2'

    };

    return send_grid_api.send(msg);
};
