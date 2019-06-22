'use strict';

module.exports = function(app) {

    var boardDetailsControllers = require('../controllers/boardDetailsControllers');
    var verifyToken = require('../verification/verificationToken');

    app.route('/boardDetails/get')
        .get(verifyToken, boardDetailsControllers.getBoardDetails);

    app.route('/boardDetails/createType')
        .post(verifyToken, boardDetailsControllers.createType);

    app.route('/boardDetails/createTask')
        .post(verifyToken, boardDetailsControllers.createTask);

};