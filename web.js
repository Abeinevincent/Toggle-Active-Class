$(document).ready(function(){
	$("ul li a").click(function(){
		$("a").removeClass("active");
		$(this).addClass("active");
	});
});