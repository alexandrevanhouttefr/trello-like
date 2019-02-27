'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        required: 'Enter the name of the user',
        index: { unique: true }
    },
    password: {
        type: String,
        required: 'Enter the password of the user'
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    friends: [{
        type : mongoose.Schema.ObjectId,
        ref: 'User'
    }],
});

UserSchema.statics.authenticate = function(username, password, next) {
    User.findOne({username: username})
        .exec(function(err, user) {
            if (err) {
                return next(err);
            } else if (!user) {
                var err = new Error('User not found!');
                err.status = 403;
                return next(err);
            }
            bcrypt.compare(password, user.password, function(err, res) {
                if (res) {
                    console.log("here");
                    return next(null, user);
                } else {
                    console.log("false");
                    var err = new Error('User not found!');
                    err.status = 404;
                    return next();
                }
            })
        });
}

UserSchema.pre('validate', function (next) {
    if (this.username === this.password) {
        this.invalidate('password', 'Password cannot be equal with username', this.password);
    };
    if (this.password.length < 5) {
        this.invalidate('password', 'Password length should be more than 6');
    };
    next();
});

UserSchema.pre('save',function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash) {
        if(err) {
            console.log(err);
            return next(err);
        }
        user.password = hash;
        next();
    })
});

var User = mongoose.model('User', UserSchema);
module.exports = User;