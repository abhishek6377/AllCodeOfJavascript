// time video 7.22.00
let a=90;
document.write("<br>"); 
document.write(`The value of a is ${a}`);
var l=Math.round(9.3);
document.write("Pre-defined function using maths ");
document.write("<br>"); 
document.write("We want to value of PI use MATH.PI"+Math.PI);
document.write("<br>"); 
document.write("We use round method to round the value "+l);
document.write("<br>"); 
document.write("We give the value uppercase use ceil method "+Math.ceil(9.2));
document.write("<br>"); 
document.write("We give the value lowercase use floor method "+Math.floor(9.2));
document.write("<br>"); 
document.write("do you want convert decimal to integer use  trunc "+Math.trunc(9.2));
document.write("<br>"); 
document.write("If you want square the value use pow function to square "+Math.pow(2,3));
document.write("<br>"); 
document.write("Do you want calculate value  square use Math.sqrt "+Math.sqrt(100));
document.write("<br>"); 
document.write("Do you want calculate minimum value of array use min function   "+Math.min(100,23,123,2,45,90));
document.write("<br>"); 
document.write(`Do you want calculate maximum value of array  use in max function ${Math.max(100, 23, 123, 2, 45, 90)}`);
document.write("Do want a random number use random method "+Math.random(0,5));
document.write("<br>"); 
document.write("Using floor method to convert into a integer number "+Math.floor(Math.random()*10));// o to 9
document.write("<br>"); 
document.write("in random method values work like array because it start with zero ");
document.write("<br>"); 
document.write("In upper code we give the value which start with zero but we want to start value 1 ");
document.write("<br>"); 
document.write("Using floor method to convert into a integer number "+Math.floor(Math.random()*10+1));// 1 to 9
document.write("If you give in range use this ");
document.write("<br>"); 
document.write("Using floor method to convert into a integer number "+Math.floor(Math.random()*20-15));// 5 to 9
document.write("<br>"); 
// create a function of min and max

function getRandom(min,max){

    // in this case max value print only upto 19
    // let x=Math.floor(Math.random() * (max-min) )+min;
    // in this case max value print only upto 20
    let x=Math.floor(Math.random() * (max-min+1) )+min;
    return x;
}
document.write("This is function  generate random number "+getRandom(10,20));

