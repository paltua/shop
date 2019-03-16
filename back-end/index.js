var express = require('express');
var app = express();
// DB settings
const settings = require('db-config-dev.json');
const qb = require('node-querybuilder').QueryBuilder(settings, 'mysql', 'pool');
app.use('db', db);

// Routes setting
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
 
app.listen(3000);