document.write("Using `new`  keyword ");
document.write("<br>");
document.write("new means memory allocated ");
document.write("<br>");
document.write("without using new keyword maka object this types");
document.write("<br>");
// var object={
//     obname:"Abhishek Gupta",
//     obAddress:"88 b usha vihar",
    
    
// };
// document.write("<br>");
// document.write("this way to print the method without new keyword");
document.write("<br>");
// document.write(object.obAddress);
document.write("This is way to print the code using new keyword");

document.write("<br>");
var objecct =new Object();
objecct.name="Abhishek gupta";
document.write("<br>");
document.write(objecct.name);
document.write("<br>");
document.write("Using object through getter and setters <br>");
document.write("<br>");
document.write("getter means get the  method and print and setter means set the value");
document.write("<br>");
var object={
    obname:"Abhishek Gupta",
    obAddress:"88 b usha vihar",
    // this is simple function
    //  getfunction:function(){
    //      return this.obname.toUpperCase();
    //  }
    
    // this getter
   //   get  getname(){
         
   //    //   return this.obname.toUpperCase();
   //   },
      // setter 
      set setname(n){
         this.obname=n.toUpperCase();
      }
     
    
    
};
object.setname="Aman gupta";
// document.write(object.getfunction());
// document.write(object.getname);
document.write(object.setname);








