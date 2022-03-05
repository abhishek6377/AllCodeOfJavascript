document.write("Variable is container where we store the value ");
document.write("<br>");
document.write("Local variable means only use in parmater");
document.write("<br>");
document.write("Global variable means use any where ");
document.write("<br>");
document.write("we set same name of local variable but we not set same name of global variable it give error "+"<br>");
let c="I am global variable ";
function variable(){
 let c="I am local variable";
 document.write(c);

//  return 0;
}
document.write(c);
variable();

