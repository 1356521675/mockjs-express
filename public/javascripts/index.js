$(function(){
	var xhrurl = 'http://192.168.101.253:3000/mockapi';
	$.ajax({
		url: xhrurl,
		type: 'get',
		async: false,
		cache: false,
		dataType: 'jsonp',
		success: function(data){
			console.log(data)
		},
		error: function(err){
			console.log(err)
		}
	})
})