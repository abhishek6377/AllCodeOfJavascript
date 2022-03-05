//function clicked(){
//console.log('This is clicked');
//}
/*window.onload=function(){
	console.log("This is document loaded");
	
}*/
/*firstcontainer.addEventListener('click',function(){
	document.querySelectorAll('.container')[1].innerhtml = " <b> This is bold </b> ";
	console.log('click hua');
})
*/
/*
firstcontainer.addEventListener('mouseover',function(){
	console.log('mouse in container');
})
firstcontainer.addEventListener('mouseout',function(){
	console.log('mouse out container');
})
firstcontainer.addEventListener('mouseover',function(){
	console.log('mouse on container');
	
	
})*/
let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
	document.querySelectorAll('.container')[1].innerhtml=prevHTML;
	console.log('mouse up container');
})
firstcontainer.addEventListener('mousedown',function(){
		document.querySelectorAll('.container')[1].innerHTML = " <b> This is bold </b> ";

	console.log('mouse down container');
})