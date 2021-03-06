#!/usr/bin/node

var configfile = process.env.RYOCDR_CONFIG || './config';

var fileExists = require('file-exists');
var conf = configfile + '.js';
console.log('use conf file:', conf);

if (fileExists(conf)) {
    var config = require(configfile);
    var App = require('./index');

    var app = new App(config); 
    app.start();
} else {
  console.log('no configfile:', conf);
}