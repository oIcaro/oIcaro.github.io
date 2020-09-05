$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

	if(scroll>=583){
		
		$('nav').css({backgroundColor:"black"});
		

	}else{

		$('nav').css({backgroundColor:"rgba(154, 154, 154,  0.3)"});

}
});
