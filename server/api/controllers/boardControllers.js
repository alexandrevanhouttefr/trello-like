'use strict';

const Board = require('../models/boardModel');

exports.createBoard = function(req, res) {
    if (req.body.name) {
        Board
            .findOne({})
            .sort('-position')
            .exec((err, doc) => {
                console.log(doc);

                var position = 0;
                if (doc !== null) {
                    position = doc.position + 1;
                }

                var boardData = {
                    name: req.body.name,
                    position: position,
                };


                Board.create(boardData, function(err, user) {
                    if (err) {
                        return res.send(err);
                    } else {
                        return res.send(user);
                    }
                });
        });

    } else {
        var err = new Error("Name of board missing");
        err.status = 400;
        return res.send(err);
    }

};

exports.getBoard = function(req, res) {

};