function myFunction()
{	
	try{
		var term = document.getElementById("keyword").value;
		var query_url = "http://www.douban.com/search?cat=&q=" + term;
		chrome.tabs.create({url: query_url});
	}catch(e)
	{
		console.log(e)
	}
}

function enterEventHandler(e)
{
	var code = e.keyCode;
	console.log(code);
	if(code == 13)
	{
		myFunction();
	}
}

document.addEventListener('DOMContentLoaded', function() 
{
	document.getElementById('search').addEventListener('click', myFunction);
	document.getElementById('keyword').addEventListener('keydown', enterEventHandler, false);
});