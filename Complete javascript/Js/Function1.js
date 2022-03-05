// document.write("hello world");
// document.write("<br>");
// document.write("Using pre-defined function ");
// document.write("<br>");
// document.write("Using Annoyomous function: ");
// document.write("<br>");
//   let c= function (){
//      console.log("I am Annoyomous!");
//   }
// // //   setTimeout(c,2000);
// // we can also use direct 

// setTimeout(c= function (){
//     console.log("I am Annoyomous!");
//     alert("Welcome to my website!");
//  },3000);
// document.write("<h4>Immeditely invoked function</h4>");

// (function (){
//      document.write("I am Immeditely called");
// }) ();
// //6.48
// // console.warn("heloo");
let daily =["1"];  //1 
let coding =daily;
let habit=["2"];
coding.push("3");
daily.push("4");
habit.push(daily);
document.write(daily.length);
// document.write(coding.length);