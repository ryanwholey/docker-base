var express = require('express');
// var redis = require('redis');
var exec = require('child_process').exec;
var app = express();
var http = require('http');
// var port = 6379; //redis port
app.use('/', express.static('./'));

app.use('/test', function(req, res, next) {
  res.send('test');
});
//look into redis host
//mount volume to --volume
// var host = process.env.REDIS_PORT_6379_TCP_ADDR || 'localhost';

// app.get('/',function(req,res) {
//   var client = redis.createClient(port,host);
//   client.set('key1','joshwyatt');
//   client.get('key1', function(err, replies){
//     res.send(replies);
//     client.quit();
//   });
// });

//

app.listen(8080);
console.log('listening on 8080');
