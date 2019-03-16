var express = require('express');
var router = express.Router();

var common_cont = require('./common/index');
var auth_cont = require('./auth/login');

router.get('/', common_cont.getData);
