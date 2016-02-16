function openChat(time, callback) {
	if (parseCookie('chatLoaded') !== '') {
		callback(true);
	} else {
		var date = new Date();
		date.setTime(date.getTime() + 24*60*60*1000);
		setTimeout(function(){
			console.log('пошла вода');
			document.cookie += 'chatLoaded=true;expires=' + date.toUTCString() + ';';
			callback(false)
		}, time);
	}
}

function parseCookie(key){
	key += '=';
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(key) == 0) return c.substring(key.length,c.length);
    }
    return '';
}

