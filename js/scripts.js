var $url = 'https://api.icndb.com/jokes/random'; 
var $button = $('#get-joke');
$button.on('click', function(){
	getJoke();
});

var $paragraph = $('#joke');

function getJoke(){
	$.ajax({
		url: $url,
		method: 'GET',
		success: function(res) {
			$paragraph.text(res.value.joke);
		},
	});
}
//function written in clear js
/*function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}*/

getJoke();