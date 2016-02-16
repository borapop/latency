
function openChat(latency, expires, callback) {
	if (parseCookie('loaded') !== '') {
		callback(true);
	} else {
		var date = new Date();
		date.setTime(date.getTime() + expires * 24*60*60*1000);
		setTimeout(function(){
			document.cookie += 'loaded=true;expires=' + date.toUTCString() + ';';
			 callback(false);
		}, latency);
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