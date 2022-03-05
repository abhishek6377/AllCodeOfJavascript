// document.write("Hello world");
var input =prompt("Enter input");
// if(input==1){
//      document.write("Continue.......1");

//  }
// else if(input==2){
//      document.write("Continue.......2");

//  }
// else if(input==3){
//      document.write("Continue.......3");

//  }              
// else if(input==4){
//      document.write("Continue.......4");

//  }
//  else{
//      document.write("Invalid input:");
//  }
  document.write("Data types<br>");
  switch(input){
      case "1":
          document.write("I am Intesger:");
          break;
      case "String":
          document.write("I am String:");
          break;
      case 2.2:
          document.write("I am Float:");
          break;
      case 'A':
          document.write("I am Character:");
          break;
      case "true":
      case "False":
          document.write("I am Boolean:");
          break;
          default:{
              document.write("I am Invalid data types:");

          }

  }