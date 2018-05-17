var socket = io.connect('http://10.0.0.62:1337');
var socket2 = io.connect('http://10.0.0.52:1337');
socket2.emit('connection', _ => {
	console.log('connected2');
});
socket.emit('connection', _ => {
	console.log('connected');
})
socket.on('update', function(data){
	console.log(data);
	if(data.occupied){
		document.querySelector('#occupied').classList.remove('hide');
		document.querySelector('#unoccupied').classList.add('hide');
	} else {
		document.querySelector('#occupied').classList.add('hide');
		document.querySelector('#unoccupied').classList.remove('hide');
	}
})
socket2.on('update', function(data){
	console.log(data);
	if(data.occupied){
		document.querySelector('#occupied2').classList.remove('hide');
		document.querySelector('#unoccupied2').classList.add('hide');
	} else {
		document.querySelector('#occupied2').classList.add('hide');
		document.querySelector('#unoccupied2').classList.remove('hide');
	}
})