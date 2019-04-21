//使layout維持9:16

//廣告主體
$(window).on('load resize', function () {
	var newsWidth = $('#onead-news').width();
	var imgHeight = (newsWidth)*1.6;
	var imgWidth = (newsWidth)*0.9;

	$('#news').height(imgHeight);
	$('#news').width(imgWidth);

});

//影片
$(window).on('load resize', function () {
	var newsWidth = $('#onead-news').width();
	// var imgHeight = (newsWidth)*1.6;
	var videoWidth = (newsWidth)*0.9;

	// $('img#news').height(imgHeight);
	$('img#video').width(videoWidth);
   
});


//關閉廣告的按鈕
$(window).on('load resize', function () {
	var newsWidth = $('#onead-news').width();
	var closeHeight = (newsWidth)*0.09045;
	var closeWidth = (newsWidth)*0.135;

	$('img#close-btn').height(closeHeight);
	$('img#close-btn').width(closeWidth);

});

