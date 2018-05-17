Vue.use(VueMaterial.default);
let app = new Vue({
	el: '#app',
	data: {
		bathroom1: null,
		bathroom2: null
	}
})
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
		app.data.bathroom1 = 'occupied';
	} else {
		app.data.bathroom1 = 'unoccupied';
	}
})
socket2.on('update', function(data){
	console.log(data);
	if(data.occupied){
		app.data.bathroom2 = 'occupied';
	} else {
		app.data.bathroom2 = 'unoccupied';
	}
})