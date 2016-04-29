var express = require('express');
var React = require('react');
var browserApp = express();
var port = 3000;

browserApp.use('/', express.static(__dirname + '/'));
browserApp.listen(port);

// browserApp.get('/', function (req, res) {
//     console.log(__dirname)
//     res.sendFile(__dirname + '/reactTest.html');
// });

// var server = browserApp.listen(port, function() {
//     console.log('Server started... on ' + port);
// });

// var app = require('app');
// var BrowserWindow = require('browser-window');
// var mainWindow = null;
// app.on('window-all-closed', function() {
//     if (process.platform != 'darwin')
//         app.quit();
// });

// app.on('ready', function() {
//     var winOptions = {
//         width: 800,
//         height: 600,
//         transparent: true
//     }
//     mainWindow = new BrowserWindow(winOptions);
//     mainWindow.loadUrl('file://' + __dirname + '/index.html');
//     mainWindow.on('closed', function() {
//         mainWindow = null;
//     });
// });