const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);

db.defaults({test: []}).write();

db.get('test')
	.push({id: 1})
	.write();
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})
app.get('/test', function(req, res){
	res.sendFile(__dirname + '/test.html');
})
server.listen(1337, _ => console.log('listening'));
