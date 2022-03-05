let x="21-2-2022";
// let a=new Date();
// let a=new Date(2014,12,34);//
// let a=new Date(2014);//
//  in function we pass 7 argument 
// year date month ,mil second,hour,day
let a=new Date("sep 23 ,2020");// we can also pass the arugment as string 

document.write("Today date is "+x);
document.write("<br>");
// document.write(a);
// document.write("by this it show in millisecond only "+a.getTime() );
document.write("<br>");
document.write("by this we get only year "+a.getFullyear());
// getMonth
// getdate 
//getMinute
// getmil.. and so on
document.write("By getDay always came integer"+getDay());
