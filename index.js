$( document ).ready(function() 
{
   $(".icon, .text").on("click",function(event){

		var section = "#"+this.parentNode.id + "-section";
		console.log(section);
		$('html, body').animate({
			scrollTop: $(section).offset().top},
			800);
		
   });


});
