// In js array is we take integer and string and Float,means we any datatyps to use in array

// let color1=["red","pink","orange","black"];

// we  use  the array  this types
let color1 = new Array("red", "pink", "orange", "black");
// by this we print all element of array 
// by this we update the array element 
color1[0] = "white";
document.write(color1);
// for(let i=0;i<Array.length;i++){


//     // }
//     let i=2;
//     while(i<Array.length){

//             document.write(color1[i]);
//             document.write("<br>");
//             i++;
// }
//operation of array   
document.write("<h2>operation of array </h2><br>");
document.write("This is tell the how many element in array " + color1.length);
//   if you want to add the new Element  in array use the push 
document.write("<br>if you add new element in array use push method<br>");
color1.push("red");
document.write(color1);
document.write("<br>");
document.write("if you add new element in array indexofZero  use unshift method<br>");
color1.unshift("blue");
document.write(color1);
document.write("<br>");
document.write("*******************************");
document.write("<br>");
document.write("if you want remove the last index of array use pop and remove first element of array use shift");
color1.pop();


document.write("delete the last index of array element :->" + color1);
document.write("<br>");
color1.shift();
document.write("delete the first index of array element :->" + color1);
document.write("<br>");
// color1.splice(2,3);
document.write("if you want  delete the particular index of array use splice function :->" + color1);
document.write("<br>");

document.write("If you want to delete all element of array two way to delete the all element  :");
// color1=[];// by this all array element delete
color1.length = 0;// by this also do
document.write("<br>");
document.write(color1);
document.write("Suppose in array you want a element of index and the size of array is 1000 how to find to use indexof array by this we give the element and find the index of array: ");
let name=["Abhishek ","Bhawani","lakshay","piyush"];
let position =name.indexOf("lakshay");
document.write(position);
document.write("<br>");
let color="I am color1";
document.write("Suppose if you make variable with same name and first is array and second is variable to find which one is array and variable used (Array.isArray(name_of_variable)):->");
document.write(Array.isArray(color1));
// document.write(Array.isArray(color1));
document.write("<br>");
let word="I am Abhishek Gupta ";
document.write(word);
document.write("<br>");
document.write(" if you want split sentence in word use split function<br>"+word.split(' '));
document.write("<br>");
document.write(word);
document.write("<br>");
document.write("Suppose if you want to split with letter use the<br>"+word.split('a'));
let w=color1.join('-');
document.write("<br>If you want to array element convert into a sentence use join function "+w);
document.write(color1);
let color2=["Golden","silver"];
let color3=["maroon","sky blue"];
let new_color=color1.concat(color2,color3);
document.write("<br>");
document.write("You want to add to string and two array use only concat() function<br> "+new_color);
document.write("<br>");
document.write('<h3>2d array(Multidiminsal Array)</h3>');
let book=[
    ["c++","300",["if and else ",["Array"]]],
    ["C","300"],
    ["java","300"],
    ["Html","300"]
];

document.write(book);
document.write("<br>");
document.write("By this we get element by index :-->"+book[0][1]);
document.write("<br>By this we get element by index :-->"+book[0][2][1]);
document.write(" Suppose if you want print all element using loop <br> ");
let i=0;
for(i=0;i<book.length;i++){
    document.write(`${book[i]}`);
    // document.write(book[i]+"<br>");
    
}    
document.write("<br>Second way to print the array element using forech loop<br>");  
// book.forEach(mybook);

// function mybook(value){
//    document.write(value+"<br>");
// }
// in this case we use types of foreach loop
book.forEach(element => {
    document.write(element);
});

