'use strict';

module.exports = function(app) {

    var userController = require('../controllers/userControllers');

    app.route('/user/signin')
        .post(userController.signIn);
    app.route('/user/signup')
        .post(userController.signUp);

};