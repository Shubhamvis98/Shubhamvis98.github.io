function show(id, sec=0) {
	setTimeout(function(){
		document.getElementById(id).style.display = 'block';
	}, sec*1000);
}

show("jack", 0.5)
show("subtxt", 2.5)