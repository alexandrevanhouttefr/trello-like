'use strict';

module.exports = function(app) {

    var boardControllers = require('../controllers/boardControllers');

    app.route('/board/create')
        .post(boardControllers.createBoard);

    app.route('/board/get')
        .get(boardControllers.getBoard);
};