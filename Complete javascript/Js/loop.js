// loop is repeation of command 
// three types of loop 
// 1.while 
// 2.for
// 3.do while
//   const a=1;// if you take const type loop are excute only one time bcause in const value 
//   are not change
  let a=1;
//   let sum=0;
//   document.write("Even number :");
// while(a<=10){
//     // document.write("Hello ji ");
//      // break;
//     // a=a+4;
//      if(a%2==0){
//      document.write(a+",");
//      sum=sum+a;
//     }
//     // document.write("<br>");
//     a++;
    
     
   
// }
// document.write("<br>"+sum);
// while(a<=10){

//      if(a%2!=0){
//      document.write(","+a);
//      sum=sum+a;
//     }
//     // document.write("<br>");
    
//     a++;
    
     
   
// }
// document.write("<br>"+sum);

// // ****************************************************************************
// a=11;// false condition
// //do while run atleat one time if condition false
// do{
    //  document.write(a);
    // }while(a<10);
    
    // // ****************************************************************************

    // for loop run with three pattern 
    // first declare and initialise value and increment and decrement 

    // for(var b=1;b<=10;b++){
    //     document.write(b);
    //     if(b==8){
    //         break;
    //     }
    //     // document.write(b);
    // }
    // ***************************************************************************************************
    //  using nested loop with break and continue and name of loop 
    outer:for (let index = 1; index <=10; index++) {// by this we give the name of loop 
        if(index==3){
            
            // document.write(index);
            // break;
            // continue;
            continue outer;
            
        }
        document.write(index);
        document.write("<br>");  
        break outer;
        for (let a = 0; a < 3 ;a++) {            
            // break outer;
            
            // if(index==10){
            document.write("Hello<br>");
            // document.write("Hello");
            // }
        }
    }

