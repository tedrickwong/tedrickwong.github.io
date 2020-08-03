$( document ).ready(function() 
{
   $(".nav-btn").on("click",function(event){

		var section = "#"+this.id + "-section";
		
		$('html, body').animate({
			scrollTop: $(section).offset().top - 80},
			800);
		
   });
   
   window.onscroll = function() {stickyNav()};

   var navbar = document.getElementById("navbar");
   var navbtn = document.getElementsByClassName("nav-btn");
   var offset = navbar.offsetTop;
   
   function stickyNav(){
		if( window.pageYOffset > offset )
		{
			navbar.classList.add("sticky");
			navbar.style.color = "#FFFFFF";
			for(var i = 0;i < navbtn.length;i++)
			{
				navbtn[i].style.borderBottom = "3px solid #FFFFFF";
			}
		}
		else
		{
			navbar.classList.remove("sticky");
			navbar.style.color = "#22313f";
			for(var i = 0;i < navbtn.length;i++)
			{
				navbtn[i].style.borderBottom = "3px solid #22313f";
			}			
		}
   }

});
