	var req;
	var url;
	function Initialize()
	{
		try
		{
			req=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				req=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(oc)
			{
				req=null;
			}
		}
	
		if(!req&&typeof XMLHttpRequest!="undefined")
		{
			req=new XMLHttpRequest();
		}
	
	}
	function Processing(name)
	{
		obj = document.getElementById(name);
		obj.innerHTML = '.';
	}

function DisplayContent(name)
	{
		obj = document.getElementById(name);
		obj.innerHTML = req.responseText;
	}
	function SendQuery(url,callbackFunction,method,cache,request)
	{
			Initialize();
		if ( (req!=null) )
		{		
			req.onreadystatechange = function()
									{
									// only if req shows "complete"
										if (req.readyState == 4)
									    {
								        // only if "OK"
											if (req.status == 200)
											{
												// Process
												eval(callbackFunction);
											}
										}
									};
					
						
			// Cache data or not , default is yes(1)
	

			if ( cache != 1 )
			{
				url += "&rand="+Math.random()*1000;

			}
			
			// Use POST or GET method , default is GET
			if ( method == 'POST' )
			{
		        req.open("POST", url, true);
		        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		        req.send(request);
			}
			else
			{										
				req.open("GET", url , true);
				req.send(null);
			}
		}
	}
	

var win=null;
var firstload=false;
function rate_y(url,request)
	{		
			if(url != '#' ){
			Processing('r_yes');
			if(request != ''){
			SendQuery(url,'DisplayContent("r_yes")','POST','',request);	
			}else{	SendQuery(url,'DisplayContent("r_yes")');}}
	
	}
	
function rate_n(url,request)
	{		
			if(url != '#' ){
			Processing('r_no');
			if(request != ''){
			SendQuery(url,'DisplayContent("r_no")','POST','',request);	
			}else{	SendQuery(url,'DisplayContent("r_no")');}}
	
	}
	
function badlink_n(url,request)
	{		
			if(url != '#' ){
			Processing('badlink_h');
			if(request != ''){
			SendQuery(url,'DisplayContent("badlink_h")','POST','',request);	
			}else{	SendQuery(url,'DisplayContent("badlink_h")');}}
	
	}
	
	
	function ShowContent(name,value)
	{
		obj = document.getElementById(name);
		obj .innerHTML = value;
	}
	function urlGetVar(id)
	{
	cURL=window.location.href;
		try
		{
		cURL=cURL.split('#');
		cURL=cURL[1];
		cURL=cURL.split('/');
		cURL=cURL[id];
		}
		catch (e)
		{
		cURL='';
		}
	return cURL;
	}


function vote_y(id,ip)
{ 
rate_y('../ratings.php?app_id='+id+'&type=yes&ip='+ip); 
}
function vote_n(id,ip)
{ 
rate_n('../ratings.php?app_id='+id+'&type=no&ip='+ip); 
}
