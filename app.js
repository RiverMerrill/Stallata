const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const gpio = require('onoff').Gpio;
const io = require('socket.io')(server);
const sensor = new gpio(2, 'in', 'both', {debounceTimeout: 1500});


app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})
io.on('connection', _ => {
	sensor.read((err, val) => {
		if(val == 0){
			io.emit('update', {occupied: true});
		} else{
			io.emit('update', {occupied: false});
		}
		
	})
})
sensor.watch(function(err, val){
	if(val == 0){
		io.emit('update', {occupied: true});
	} else{
		io.emit('update', {occupied: false});
	}
})	
server.listen(1337, _ => console.log('listening'));
io.listen(server);
