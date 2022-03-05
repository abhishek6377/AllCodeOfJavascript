// document.write("hello world");
document.write("Function is statement of block types of function "+"<br>");
document.write("1.Pre defined"+"<br>");
document.write("2.User defined"+"<br>");

function table1(){
    document.write("Table of ");
    document.write("<br>");
    for (let i = 1; i <=10; i++) {
        document.write("1"+" X "+i+"="+1*i);
        document.write("<br>");
    }
    document.write("<br>");
    document.write("<br>");
    
}
// this is simple 
table1();

document.write("<br>");
document.write("paramter function"+"</br>");
function table(n){/// in paramter function not required data function
    document.write("Table of "+n);
    document.write("<br>");
    for (let i = 1; i <=10; i++) {
       document.write(n+" X "+i+"="+n*i);
       document.write("<br>");
    }
    document.write("<br>");
    document.write("<br>");

}
document.write("<br>");
document.write(" two paramter function"+"</br>");
function sum(a,b){/// in paramter function not required data function
    
    let c=a+b;
    document.write(`Sum of ${a} and ${b} is `+ c);
    document.write("<br>");
    
}
// that is function paramter 
table(2);
table(3);
sum(2,3);
sum(200,30);
document.write("In js argument is pre defined functin which are used to tell how many paramter are passed"+"<br>");

function paramter(){
    console.log(arguments);
    // do you want index value pass value in argument
    //  console.log(arguments(2));// it give 3
}
paramter(2,3);
// paramter(2,3,23);
// paramter(2,3,23,23);
// paramter(2,3,23,23,32);


document.write("<br>");
function add(){
     if(arguments.length==0){
         document.write("No parameter pass!");
        }
     else{
         let sum=0;
         for (let i = 0; i < arguments.length; i++) {
             sum=sum+arguments[i];
            }
            document.write("<br>sum "+sum);
            document.write("<br>")
        }
 }

 add();
 add(1,2);
 add(2,34,2);
 add(4.5,5);



// return function using 


function mul(a,b){
    return a*b;

}
document.write("Multiplication: ")
mul(3,2);

document.write("return means return anything:"+"<br>");
function ret(a,b){
/// by this way we print any expression any variable 
    // return "hello world";
    // if you pass two return only first is return then your are program  not goes to second return 
    // if also pass the array 
    return [90,90,"bhis"];
    // return a+b;

}
let c=ret(23,23);
document.write(c);
document.write("<br>**************************************************"+"<br>");
document.write("We use the if else condition through the function<br>");
 function compare(a,b){
     if(a>b){
         document.write("I am A");
        }
        else if(b>a){
         document.write("I am B");
         
        }
        else{
         document.write("equal");

     }
 }
 compare(2,33);
 // Annoyomous function which have no name 
 document.write("<br>");
document.write("I am using Annoyomous Function ");
document.write("<br>");

// we not use the direct function we store in variable
 
let cb=function (){// this function is Annoyomous function 
     document.write("hello world! I am Annoyomous function!");
     document.write("<br>");
 }
cb(); 
