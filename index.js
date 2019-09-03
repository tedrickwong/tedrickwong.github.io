$( document ).ready(function() 
{
    /*var rows = document.getElementsByClassName("lCol");
    var images = document.getElementsByClassName("rCol");
    
    for(var i = 0;i < rows.length;i++)
    {
        images[i].style.height = rows[i].clientHeight+"px";
    }*/
	
	var pages = document.getElementById('navigation').getElementsByTagName('a');

	for( i=0; i< pages.length; i++ )
	{
		var page = pages[i];
		var found = false;
		
		if (location.href.includes(page.innerText.toLowerCase().split(" ")[0]))
		{
			page.firstElementChild.style.color = "black";
			page.firstElementChild.style.backgroundColor = "white";	
			found = true;
			break;
		}
		
		if (found == false && i == pages.length - 1)
		{
			document.getElementById("home").style.color = "black";
			document.getElementById("home").style.backgroundColor = "white";	
		}
	}


});