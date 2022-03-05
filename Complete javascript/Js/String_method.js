document.write("Using string method:<br>")
let str="  My name is Abhishek Gupta ";
// let st1=" Gupta";
// document.write("But javascript is case sensitive language:<br>");
// // if("Abhishek"==str){
//     if("abhishek"==str){// this is not equal to string beccause a is small 
//         document.write("Equal<br>");
//     }
//     else{
//         document.write("Not equal <br>");
//     }
//     document.write("Adding to string using cancate method:<br>");
//     let str2=str.concat(st1);
//     document.write(str2);
// substring means take a part of little bit of string 
    document.write("<br>find substring of string "+str.substring(7,9));
    // index of means where your word stand
    document.write("<br>find index of string "+str.indexOf("Abhishek"));
    document.write("<br>find lastindex of string "+str.lastIndexOf("My"));
    // index of means it count left side 
    // and last index of means count right side
    document.write("<br>");
    document.write(str);
    document.write("<br>");
    document.write("<br>find trim of string <br>"+str.trim());
    document.write("<br>find trim_start of string <br>"+str.trimStart());
    document.write("<br>find trim_right of string <br>"+str.trimEnd());
    document.write("<br>find UpperCase of string "+str.toLowerCase());
    document.write("<br>find lowerCase of string "+str.toUpperCase());
    document.write("<br>find replace of string "+str.replace("Abhishek","Suraj"));
    let str4=str.includes("Abhishek");
    // include means it show this word are present in string or not
    document.write("<br>");
    // if word are present in string it give true and otherwise false 
    
    document.write("This include method means word are here string or not:- "+str.includes("Abhishek"));
    document.write(str4);
    let a="Suraj";
    document.write("<br>");
  document.write(a[3]);