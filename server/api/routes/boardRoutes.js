'use strict';

module.exports = function(app) {

    var boardControllers = require('../controllers/boardControllers');
    var verifyToken = require('../verification/verificationToken');

    app.route('/board/create')
        .post(verifyToken, boardControllers.createBoard);

    app.route('/board/get')
        .get(verifyToken, boardControllers.getBoard);

    app.route('/board/adduser')
        .get(verifyToken, boardControllers.addUser);

    app.route('/board/delete')
        .get(verifyToken, boardControllers.deleteBoard);

};