function load_page(page) {
	var xhr = new XMLHttpRequest();
	xhr.open("get","http://www.firegg.top:8099/api/ox?page="+page)
	xhr.send(null)
	if(xhr.status>=200 && xhr.status>300) {
		alert(xhr.responseText);
	}
}

window.onload = function() {
	load_page(0)
}
