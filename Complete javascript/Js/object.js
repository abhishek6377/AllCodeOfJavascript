document.write("<br>");
document.write("Object is instance of class"+"<br/>");
document.write("<br>");


// object 
let person={
    // Name :"Abhishek Gupta",
    // do want to give the name with space use this 
    'Na me' :"Abhishek Gupta",
    Address:"88-b usha vihar treveni nagar",
    Proffessional:"Java Developer",
    welcome: function (){
        document.write("Hello evening ");
    }
};
document.write("<br>");
document.write("Two to use the object "+
"1.dot concate ,2.using square bracket");
document.write("<br>");
document.write(person['Na me' ] );
document.write("<br>");
document.write(person.Address);
document.write("<br>");
// second way 
document.write(person['Proffessional']);
document.write("<br>");
document.write("If you want to see all objecct simple write the object name ");
console.log(person);
document.write("<br>");
document.write("If you want to delete the element use delete keyword");
document.write("<br>");
delete person.Address;
document.write(person);
document.write("If you want to find the element use in keyword");
document.write("<br>");
document.write('Address' in person);
document.write("In keyword we find the all element ");
document.write("<br>");
document.write("using IN keyword and print all element  and his value through the loop ");
document.write("<br>");
for(let key in person) {
    document.write(key+": "+person[key]);
    document.write("<br>");                     
    
}
document.write("using function throught object: ");
document.write("First way to use the function through the object : ");

document.write("<br>");
person.go=function greet(){
    document.write("Good morning :");
}
person.go();
document.write("<br>");
document.write("Second way to use the function through the object : ");
function greet1(){
        document.write("Hello evening ");
    }
    document.write("<br>");
    person.n=greet1();
    document.write("<br>"); 
    document.write("third way to use the function in the object : ");
    document.write("<br>"); 
    document.write("In fourth way no need to write declare function : ");
    //   
    // document.write("<br>😂✌✌✌😂✌✌✌✌🤞😂😂😂✌😂✌✌✌😂✌✌✌✌🤞😂😂😂✌😂✌✌✌😂✌✌✌✌🤞😂😂😂✌");
    // document.write("helo");
    document.write("<br>"); 
    
    document.write("using this keyword through the object .......");
    document.write("<br>"); 
    /// making a objecct 
    // by this we set the value of object 
    let func={
        first:"Abhishek",
        last:" Gupta",
        sayhello (){
            document.write(func.first+" favorite color is "+color.red);
            // by this we called the function 
        }
    };
    let color={
        red:"red",
        orange:"Orange"
    }


    func.sayhello();
    // document.write("<br>😂✌✌✌😂✌✌✌✌🤞😂😂😂✌😂✌✌✌😂✌✌✌✌🤞😂😂😂✌😂✌✌✌😂✌✌✌✌🤞😂😂😂✌");
    // document.write("helo");







