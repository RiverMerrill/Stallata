Notification.requestPermission().then(data => {
	if(data == 'denied'){
		console.log('Permission denied');
		return;
	}
	if(data == 'default'){
		console.log('Permission dismissed');
		return;
	}
	console.log(data);
})
function notify(title, body){
    var options = {
        body: body
    }
    var n = new Notification(title, options)
}
