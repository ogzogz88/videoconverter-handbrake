const uuidv4 = require('uuid/v4');

module.exports = (options = null) => {
    return (req, res, next) => {
        const cookie = req.cookies._uid || {};
        console.log("cookie");
        console.log(cookie);
        if (Object.keys(cookie).length === 0) {
            console.log("inside if start");
            res.cookie('_uid', uuidv4(), { maxAge: (3600000 * 24) * 30, domain: '127.0.0.1' });
            console.log("res.cookie");
            console.log(res.cookies);
            console.log("inside if end");

        }
        next()
    }
}