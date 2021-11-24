const bcryptjs = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        if(!email) {
            res.status(400).json('Please provide an email and password');
        } else {
            await db
                .users
                .find_user_by_email(email)
                .then ( async ( innerUser ) => {
                    if( innerUser.length > 0 ) {
                        return res.status(500).json('Email account already in use');
                    }
                    
                    const salt = bcryptjs.genSaltSync(10)
                    const hash = bcryptjs.hashSync(password, salt)

                    await db.users.create_user(
                        email,
                        hash
                    )
                    .then(() => {
                        req.session.email = email;
                        res.status(200).json('registered');
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },

    login: async (req, res) => {
        const { email, password } = req.body;
        const db = req.app.get('db');

        await db
            .users
            .find_user_by_email(email)
            .then((response) => {
                if(!(response.length > 0)){
                    return res.status(401).json('Email or password do not match our records');
                }
                const areEqual = bcryptjs.compareSync(password, response[0].password);
                if(!areEqual){
                    return res.status(401).json('Username or password do not match our records');
                }
                delete response[0].password
                req.session.user = response[0];
                console.log(req.session.user);
                res.status(200).json(req.session.user);
            })
    },



}