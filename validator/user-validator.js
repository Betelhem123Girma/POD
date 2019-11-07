'use strict';

const Promise = require('bluebird');
const helper = require('../util/helper');

exports.hasSignUpFields = req => {
    return new Promise((resolve, reject) => {
        helper.validateEmpty('first_name', `No 'first_name' provided`, reject, req);
        helper.validateEmpty('last_name', `No 'last_name' provided`, reject, req);
        helper.validateEmpty('email', `No 'email' provided`, reject, req);
        helper.validateEmpty('password', `No 'password' provided`, reject, req);

        helper.sanitizeTrim(req, ['username', 'email', 'password']);
        resolve(req.body);
    });
};

exports.hasLoginFields = req => {
    return new Promise((resolve, reject) => {
        helper.validateEmpty('email', `No 'email' provided`, reject, req);
        helper.validateEmpty('password', `No 'password' provided`, reject, req);

        helper.sanitizeTrim(req, ['email', 'password']);
        resolve(req.body);
    });
};