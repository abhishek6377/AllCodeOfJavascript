document.write("hello","<br>");
var rating=prompt("What is your rating");
switch(rating)
{
	case "1":
	document.write("The rating is 1:");
	break;
	case "2":
	document.write("The rating is 2:");
	break;
	case "3":
	document.write("The rating is 3:");
	break;
	case "4":
	document.write("The rating is 4:");
	break;
	default:
	document.write("Your rating is invalid");
	break;
}