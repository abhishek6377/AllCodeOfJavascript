//using settimeout and setinterval
logokaro=()=>{
	document.querySelectorAll('.container')[1].innerHTML="<b> Set interval fired </b>";
	console.log("I am your log");
}
//setTimeout(logokaro,2000);
setInterval(logokaro,2000);// this is change every 2 second
//clr=setInterval(logokaro,2000);  this is use to end set interval
//clearInterval(clr);

//clr=setInterval(logokaro,5000);
//this use cancel cleartimeout(clr);

