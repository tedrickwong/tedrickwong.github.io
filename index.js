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
		
		if (location.href.includes(page.innerText.toLowerCase().split(" ")[0]))
		{
			page.firstElementChild.style.color = "black";
			page.firstElementChild.style.backgroundColor = "white";	
			break;
		}
		
		if (i == pages.length - 1)
		{
			document.getElementById("home").style.color = "black";
			document.getElementById("home").style.backgroundColor = "white";	
		}
	}


});

/* function openPage(pagename){
	switch(pagename)
	{
		case "home":
			location.href="index.html";
			break;
		case "experience":
			location.href="experience";
			break;
		case "projects":
			location.href="projects";
			break;
		case "contact me":
			location.href="contact";
			break;
	}
	document.getElementById(pagename).style.color = "black";
	document.getElementById(pagename).style.backgroundColor = "white";
} */