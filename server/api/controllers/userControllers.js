'use strict';

var jwt = require('jsonwebtoken');

const User = require('../models/userModel');

exports.signIn = function(req, res) {
    if (req.body.username && req.body.password) {
        User.authenticate(req.body.username, req.body.password, function (error, user) {
            if (error || !user) {
                var err = new Error("Wrong email or password.");
                err.status = 401;
                return res.send(err);
            } else {
                const payload = {
                    userid: user._id
                }

                var token = jwt.sign(payload, 'supersecret' /* todo: to change */, {
                    expiresIn: 60*60*24
                });
                res.cookie('jwt', token);
                res.json({
                    success: true,
                    token: token
                });
                //req.session.userId = user._id;
                //return (res.send(200));
            }
        });
    } else {
        var err = new Error("All fields required");
        err.status = 400;
        return res.send(err);
    }
};

exports.signUp =  function (req, res) {
    if (req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        };

        User.create(userData, function(err, user) {
            if (err) {
                return res.send(err);
            } else {
                return res.send(user);
            }
        });
    } else {
        var err = new Error("All fields required");
        err.status = 400;
        return res.send(err);
    }
};

exports.signOut = function(req, res) {
    if (req.cookies) {
        res.clearCookie('jwt');
        return res.sendStatus(200);
    }
    else {
        var err = new Error("Cookies required");
        err.status = 400;
        return res.send(err);
    }
}


