$( document ).ready(function() 
{
   $(".nav-btn").on("click",function(event){

		var section = "#"+this.id + "-section";
		console.log(section);
		$('html, body').animate({
			scrollTop: $(section).offset().top - 80},
			800);
		
   });
   
   window.onscroll = function() {stickyNav()};

   var navbar = document.getElementById("navbar");
   var offset = navbar.offsetTop;
   
   function stickyNav(){
		if( window.pageYOffset > offset )
		{
			navbar.classList.add("sticky");
		}
		else
		{
			navbar.classList.remove("sticky");
		}
   }

});
