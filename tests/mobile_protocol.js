/**
 * Mobile Protocol Tests
 */

var WebSocketLib = require('ws');

exports.runTests = function() {

// Remove all entries in DB to start tests with clean slate
require('./../config/depopulate').depopulateDB();

// pre-populate with test company and agent
require('./../config/populate').populateDB();

// var ws = new WebSocketLib('ws://echo.websocket.org', {protocolVersion: 8, origin: 'http://websocket.org'});
// var str = Date.now().toString();
// var dataReceived = false;
// ws.on('open', function() {
//   ws.send(str, {mask: true});
// });
// ws.on('close', function() {
//   //assert.equal(true, dataReceived);
//   //done();
// });
// ws.on('message', function(data, flags) {
//   //assert.equal(str, data);
//   console.log(data);
//   ws.terminate();
//   dataReceived = true;
// });


}