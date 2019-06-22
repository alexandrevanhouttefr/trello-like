'use strict';

module.exports = function(app) {

    var userController = require('../controllers/userControllers');
    var verifyToken = require('../verification/verificationToken');

    app.route('/user/signin')
        .post(userController.signIn);
    app.route('/user/signup')
        .post(userController.signUp);
    app.route('/user/signout')
        .post(verifyToken, userController.signOut);

};