//var d = new Date();
//var n = d.getDate();
//console.log(n);


function myFunction() {
    var d = new Date();
    
    const week={
    weekday : "Sunday",
    weekday1 : "Monday",
    weekday2 : "Tuesday",
    weekday3 : "Wednesday",
    weekday4 : "Thursday",
    weekday5 : "Friday",
    weekday5 : "Saturday"
    
    }

   return week.weekday
   
}

console.log(myFunction());


/*
let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function toSubArrays (arr){
    // sort the array numerically
    let sortArr = arr.sort((a,b) => a-b);
    // temp holding arrays
    let tmpArr = [];
    let result = [];
    
    for (let i = 0; i <= sortArr.length; i++) {
        if ((i === 0) || (sortArr[i] === sortArr[i - 1])){
              console.log("sort", sortArr[i]);
            console.log("temp", tmpArr);
            console.log("result", result);
            // add first element or matching element to tmp array
            tmpArr.push(sortArr[i]);
        } else {
            // add tmp array to result array
            result.push(tmpArr);
            // clear the tmp array
            tmpArr = [];
            // add new value to tmp array
            tmpArr.push(sortArr[i]);
        }
    }
    return result;
}
console.log(toSubArrays(arr));

*/


/*
    
(function () {
    
    
    const myGrades= [93, 95, 88, 0, 55, 91];
    
   
        
        const total= myGrades.reduce((accumulator, grade) => {
            
            console.log("accumulator", accumulator);
            console.log("grade", grade);
            return accumulator + grade / myGrades.length;
            
        
            
        },0);
    
            console.log(total); 
         
    
    
       const failing= myGrades.filter(item => {
           
           
           return item < 70;
           
       });
    
        console.log(failing);
        console.log("You failed " +failing.length+  " times ");
    
})();

*/



    /*const myGrades= [93, 95, 88, 0, 55, 91];
    
   
        
        const total= myGrades.reduce((accumulator, grade) => {
            
            console.log("accumulator", accumulator);
            console.log("grade", grade);
            return accumulator + grade / myGrades.length;
            
        
            
        },0);
       
       */



    
    
            



// What is Javascript?

// Javascript is synchronous which meanings that it can only run one block of code on a 
// page at a time. It also single threaded(only has one call stack) and non-blocking.
//programs requires ALLOCATING MEMORY (without it we coudlnt create files or create files)
//programs also require PARASE and EXECUTE (which allows us to read and run commands)
//Every web browser has their own engine to interpret javascript code.
//IE Exploer has a V8 Engine to internet javascript.
// An Engine has two parts: MEMORY HEAP(creating a varible is allocating memory and it stored inside the memory heap of the broswer) and CALL STACK(reads and executes )

//When you use ALLOCATE MEMORY(create a variable). You can often create a MEMORY LEAK. Unused varibles is the cataylst for that leak. There's only a limited amount of space that can go inside of a memory heap. So ,it is recommended to keep global variables to a minimum when you have lots of code and create local variables instead.

//Call Stack
//reads and excutes our code. Tells us the order in which the console.log() or functions, arrays, etc appear.

//console.log(1)//is called first  and outputs 1 and removes it
//console.log(2)//runs once and outputs  2 and removies it
////console.log(3)//runs once and excutes 3 and removies it

/*
const num=[[0,1], [4,9], [3,8]];


const flatten = num.reduce((accumulator, array) =>{

  console.log('accumulator', accumulator);
  console.log('array', array);
  return accumulator.concat(array) ;
    
   
}, []);

 console.log(flatten);
 
 */

/*
const one = () => {
    //this entire function is an example of a closure(nested functions)
    const two = () =>{
        
        console.log(4);
    }
    
    two();
}

//console.log(4); will run first and then remove itself
//two(); //function two will run next and remove itself
//one(); // will be called last and remove itself
*/

//Recurrsion is when a functionc calls itself. Wventually it will loop over and over
//creating a STACK OVERFLOW .

//ASYNCRNOUS // allows you to excute larger files and Javascript relies the Callback Functions(WEB API, SETIMEOUT, and AJAX) along with the help of CALLBACK QUE & EVENT LOOPS) along with  prevent blocking of single threaded code.

//Javascript(along with Memory Heap and Call Stack) Rely on WEB API, CALLBACK QUE AND LOOPS to beomce ASYNCRNOUS. 

// WEB API includes DOM(Document Object Model), AJAX(XMLHttpRequest), and TIMEOUT(SetTimeOut).


// After WEB API is Triggered it notfies the broser of a CALLBACK QUE(Setimeout for example)  that it has a piece of code ready to run

// Event Loops will check to see if the Call Stack in Javascript is Empty First. It Runs 24/7

// Event Loops Then Moves the CALLBACK QUE Into the CALL STACK and Call Stack Executes the Code(console.log(2) for example). 

/*
console.log(1);//is called first  and outputs 1 and removes it
setTimeout(() => {
    
    console.log(2);
},2000)  //runs last because it goes through Web API( triggers setTimeOut and pauses 2 seconds), Callback Que and Event Loop.
console.log(3);//runs second

/*


//ES8

/*
//padstart and padend
// good for aligning strings 

//const animal="Turtle";

//console.log(animal.padStart(10)); // output will provide 10 internal padding space starting at the string..pushing it to the right

//console.log(animal.padEnd(10)); //output will provide 10 internal padding space starting at the string..pushing it to the  left


const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';


console.log(startLine);
console.log(turtle.padStart(7));
console.log(rabbit.padStart(7));

//turtle = turtle.trim().padEnd(9, '*');

*/


/*
//Trailing commas, functions and paramter lists 

//normally you would provide an adddtional comma if you had long parameter lists
const fun = (a,b,c,d,) =>{
    
    
    return a;
    
    
}

console.log(fun(1,2,3,4,));

*/


//Object.Values and Object.Entries
//allows us to loop through objects like an array.

//Object.Values alllows to access the value(keys) of a property in an object

/*
let obj= {

    username1: "Brandon",
    username2 : "Kiki",
    username3 : "Eboni"

}

Object.values(obj).forEach(value =>{
    
    console.log(value); //output will be the values "Brandon", "Kiki", "Eboni".
    
});

*/


/*

//Object Entries allows to acess both properties and values. It returns an array.
// and because it is now an array we can use map, filter, and reduce methods.



Object.entries(obj).forEach(value =>{
    
    console.log(value); //gives us an array of the properties and values of the object
    
});

//Replacing a value with an empty string in an arrary

Object.entries(obj).map(value =>{
    
   //console.log(value[1] + value[0].replace('username', ''));
    
    return value[1] + value[0].replace('username', '');
  
});



// Converting an array into a string

let obj1 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}


const value= Object.entries(obj1).map(value => value.join(" ")).join(' ');

console.log(value);

*/



/*
//includes 
//determines whether a certain element inside of array resides. returns either true or false

const array = ["dog", "cat", "turtle"];


array.includes("fox");

console.log(array.includes("rabbit"));
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];



console.log(dragons.includes("John")); //produces false

const result = dragons.filter( name => name.includes('John'));
console.log(result); //produces true

*/

/*

//exponential operator
// EC7 released cube and square method for our number variables.

const square = (x) => x**2; //createsa  function that provies square root of a number

console.log(square(2)); //output will produce 4

const cube = (y) => y**3; // creates a function that will cube a nunber

console.log(cube(4)); // output will produce 64

//Advanced Objects: refrence types, context, and instantiation

*/


// Reference Types
// varibles and objects that the programmer  creates are called refrence types

//var object1= {value: 10} //stores properties value of 10 inside of object 1 box 
//var object2 = object1; // object 2 obtains REFRENCES of the properties of object 1 making it a reference type

//var object3 = {value: 10} //stores a value property of 10 inside of object 3 box.

//object1 === object2 would be considered true because object 2 contains all the properties of object 1

//Context
// often confused with scopes
// tells you where exactly the location of the object.
// if you type in console.log(this) inside of google console 
/// winodw would be the object


//Instaniation
//making a copy of an object and reusing the code in various places.

/*
class Animal {
    
    constructor(name, type, color){
        
        this.name= name;
        this.type= type;
        this.color= color;
    }
    
    getInfo(){
        
        console.log(` ${this.name} is a ${this.type} and is the color ${this.color}`);
    }
}


class Mamal extends Animal {
    
    
    constructor(name,type, color){
        
        super(name,type,color);
    
    }
    
    sound(){
        
        
        return `${this.name} is a ${this.type} who is ${this.color} and goes Moooooooooo!`
    }
}

const cow1= new Mamal("Bernadine", "cow", "brown");

console.log(cow1.sound());


*/

/*
class Person {
    
    
    constructor(name, email){
        
        this.name= name; // super from user extend class can obtain the name and email property
        this.email= email; 
         
    }
    
     getInfo(){
        
        return `Hello my name is ${this.name} and you can reach me via ${this.email}`
    }
    
}

class User extends Person{
    
    
    constructor(name, email, customer){
        
        
        super(name,email); // super obtains the properties from the Person Class
        this.customer= customer; 
        
    }
    
    
    getData(){
        
        return `My name is ${this.name} and I am a ${this.customer} you can reach me via ${this.email}`
    }
    
}

//const contact= new Person("Brandon", "bcrittle@gmail.com");

//console.log(contact.getInfo());

const contact1 = new User("Kiki", "timikacrittle@gmail.com", "Sales Rep");

console.log(contact1.getInfo());
console.log(contact1.getData());

*/



/*
const mapArray = array.map (user => {
    
    user.items = user.items.map ( item => {
        
        return item + "!";
        
    });
    
    
    return user;
});

console.log(mapArray);

*/


/*
const arrayNum = [5, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num) => {
	
	return num * 2;
});

console.log(newArray);


*/


/*

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


const reduceArray = array.reduce((accumulator, num) =>{
    
    
    return accumulator + num.score;
    
}, 0);

console.log(reduceArray);

*/



/*
var double= [];
const newArray = array.forEach(function(arrays){
    
    

    
    double.push(arrays.username + "!");
    
});

    console.log(double);

*/

//const mapArray = array.map(num => num.username + "?");

//console.log(mapArray);

//const filterArray= array.filter(num => num.team === "red");

//console.log(filterArray);

//Advanced Arrays

// Most Common 3 Loops for Arrays are Map, Filter, and Reduce


/*

// Reduce Arrays
// allows you to filter AND map arrays
// always include return 
// the accumulator stores our updated value when it is added
// 0 reperesents the starting point for our accumulator
 
const array = [1,2, 10, 16];
const reduceArray = array.reduce((accumulator, num) => {
    
   return accumulator + num;
    
}, 0);

console.log(reduceArray);
*/


/*

//Filter Arrays
// use with loops and test condtionals

const array = [1,2, 10, 16];

const filterArray= array.filter(num => num > 5);

console.log(filterArray);
*/


/*

// Map Arrays
//creates a new array collection for us(MapArray) and we are able to multiply without
//having to create an empty(double)array. 
// have to use a return statement.

const array = [1,2, 10, 16];

const mapArray = array.map((num) =>{
    
    
   return num*2;

   
    
    
});

 console.log(mapArray);

*/


/*


const array = [1,2, 10, 16];

const double = []; // creatae empty array to multiply items inside of the forEach

const newArray = array.forEach((num) => {
    
    double.push(num*2); //use push method to push our empty array onto the numbers we are looping through and have them multiplied by two

})

console.log(double);
var array = [1,2, 10, 16];

var double=[];

var newArray = array.forEach(function(arrays){
    
     double.push(arrays * 2);
    
    console.log(double)
    
})
*/








/*

*/




/*


// Compose 
//passes a variable and excutes a function two times

const compose = (f, g) => (a) => f(g(a)); // 5 will be stored inside of (a)

const multiply = (num) => num + 1; // function g and f will both run indvidually  and add 1 

console.log(compose(num, num)(5)); // 7 will be the output 


const compose = (f, g) => (a) => f(g(a)); // 10 is stored inside of a 
const add1 = (num) => num + 1; // g function will run and add 10 + 1 = 11
const add5 = (num) => num + 5; // f function will run and add 11 + 5 = 16
console.log(compose(add1, add5)(10)); // 16 is the output


*/


//Advanced Functions

/*
function first(){
    
    var greet = 'Hi';
    
    function second(){
        
        alert(greet);
    }
    
    return second;
    
}

var newFunc= first();
newFunc();


*/



// Rewritten w/ Closures
// with Closures the function will only run once and excute afterward. 
// However it does remember that there are references made.
// So, after first(); anonymous function is called in console  the second () anonymous function acts as a child and excutes the code 
// and will be able to obtain the variable of first()'s function local scope.

/*
const first = () => {
    
    const greet = 'Hi';
    
 const second = () => {
     
     
     alert(greet);
   
 }
 
   return second();
}

const newFunc = first();
newFunc();


const addTo = x => y => x + y;
var addToTen = addTo(10); // stores 10 in x function
console.log(addToTen(3)); // stores 3 in y function and returns x+y(13)


*/

/*

//Curriyng a Function

const multiply = (a,b) => a*b;
//currying allows to accept one parameter at a time
// the two paramters act as a nested function.
// when paramter a is called it will return a B Function 
//that tels us to multiply 3 * 4 and we get 12
const curriedMultiply = (a) => (b) => a*b;
//console.log(curriedMultiply(3)(4));
//*optional* you can store it inside of another variable for other use 
const multiplyBy5 = curriedMultiply(5)(10);
console.log(multiplyBy5);




const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5);

console.log(add5(12));

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1));





*/


//let a = 'test';
//let b = true;
//let c = 789;

/*

const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const { firstName, lastName} = person;


*/

/*
const a = 'test';
const b = true;
const c = 789;

const okObj = {
    
    a,
    b,
    c
    
}


console.log(c);

*/

/*

function greeting (firstName="Brandon", city = "Holly Springs"){
    
    return `Hello ${firstName} Have I met you before? I think we met in ${city} before???`;
}

console.log(greeting());


*/


//const isValidAge = (age = 10) => (age);

//console.log(isValidAge());





/*
const whereAmI = (username, location) => {
    
    if(username && location){
    
        return " I am not lost";
    }
    
    else{
        
        return " I am lost";
    }
    
}

console.log(whereAmI("bcrittle", "home"));


Alternative Version w/ teranary

const whereAmI = (username, location) => username && location ? "I am not lost" : "I am totally lost";  

*/


//ECMA SCRIPT V. 5 & 6 == JAVASCRIPT

// Library for Javascript that allows browsers the ability to read and perform task from Javscript



// Symbol
// Create a symbol: "This is my first Symbol"
// is used mostly as properties inside of objects
// cannot duplicate the same symbol
//const sym = Symbol('This is my first Symbol');


//Writing Javscript Variables (Let and Const)

//const variable- CANNOT BE CHANGED- retains its oringinal value throught the entire time you code


/*

//Acessing Strings

const name= "Brandon";
const fortune= "Sucessful"
const money = "Cash";

const fortuneTold = `Hello ${name} in the immediate future you will be highly ${fortune} and earn lots of ${money} in all your desired fields`;

console.log(fortuneTold);

*/

/*
// Writing a Function
// you can now pass default values inside of the parameters of the function
// without having to assign it anything when the function is called. 

function greeting(name= '', fortune= 20, money= 100000){
    
    
    return `Hello ${name} in the immediate future you will be highly ${fortune} and earn lots of ${money} in all your desired fields`;
}

//console.log(greeting());
console.log(greeting("Brandon", "Sucessful", 500000));

*/

/*
//Arrow functions
//another way to write a function with a return.
// the arrow represents the brackets of function
// in the example (a+b)vrepresents what you return
// dont have to write return if code is on a single line.


const add = (a,b) => a+b;

console.log(add(12,5));


*/

/*const player = "bobby";
let experince = 100;
let wizardLevel = false;

if(experince > 90){
    
    let wizardLevel= true;
    console.log(wizardLevel);
}

console.log(wizardLevel);

*/



// const objects- cant change variable name but can change the properties inside of the object






// Different ways to write Object Properites

/*const name= "Brandon Crittle"

const obj= {
    [name] : 'Hello',
    [1+2] : " Goodbye"
}

*/


//Example 2

/*const a = "Simon";
const b = "Brad";
const c = {};

const obj={
    a,
    b,
    c
}

console.log(obj.c);

*/

/*

//ways to call the properties inside of object
console.log(player);
//console.log(obj.player);



// In this example when you use the variable "let" the variable inside of 
//the condtional scope will create a new instance of the variable(wizardlevel)
//you cant access the let variable outside of the condtional scope only inside.
//would be different if you had used "Var"

const obj = {
    
player : "bobby",
experince : 100 ,
wizardLevel : false
    
}

//Acessing Properties with Variables
const { player,  experince } = obj;
let{wizardLevel}= obj;

*/


/*

function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

console.log(moveCommand("left"));

*/


/*
//Swith Statements

function moveCommand(direction) {

    var whatHappens;

    switch (direction) {
        
        
        case "forward":
            whatHappens= "You encountered a Vampire";
            break;

    
    
        case "backward":
            whatHappens= "You encountered a Ghost";
            break;

            
            
            
        case "right":
            whatHappens= "You encountered a Warewolf";
            break;
    
        default:
        whatHappens = "Please enter valid direction";
    
    
    }


 return whatHappens;

}

console.log(moveCommand("1234"));

*/



/*

// Ternary Operators

function validUser(bool){
    
    return true;
}

Example 1:

var answer= validUser(true) ? "You may enter" : " You may not enter";



var autoAccount= "Your account balance is : " + ( validUser(false) ? " $120.00 " : " Incorrect Pin Number ");

console.log(autoAccount);

Ternary Example 2:

function question(num){
    
    if(num > 21){
        
        return num;
    }
    
    
}
var answer= question(40) ? "You can pass" : "You cannot pass";

console.log(answer);

Ternary Example 3:



function isValidAge(age){
   
    return age;
}

var answer= isValidAge(20)  ? "You are of legal age" : " You are not of legal age";

console.log(answer);

/*

/*

// Window variable fun is overwritten each time the function is called.
//the final output will be "Goodbye".

var fun = 5;

function funny(){
   
    var fun = 10;
    console.log(fun);
    
}

function funnier(){
    
    var fun = "Hello";
    console.log(fun);
    
}

function funniest(){
    
     fun = "Goodbye";
    console.log(fun);
}

console.log("window", fun);
funny();
funnier();
funniest();
*/



/*

//Run q3()first
//Run q32() afteward
//alert will produce "hello"

function q3() {
    window.a = "hello";
}

function q32() {
    alert(a); 
}

q3();
q32();

/*

/*

//Acessing a global varaible.

var num=0;

function test(){
    
console.log(num);
      
}

test();
*/



/*

//Function Scope
// you can only access a variable inside of a function
// the result will produce 20 
// num  = 20 overides the window(global) variable(0)
//  alert or console.log of the new value of num(20) inside of another function (q32)
// be sure to call both functions

var num=0;

function test(){
    
num= 20;
      
}

test();


function result()
{
    alert(num);
    
}

result();
 

*/




/*

//Function Scope
// the result will produce 0 because you cant access 20 outside of its scope
// be sure to call both functions

var num=0;

function test(){
    
var num= 20;
      
}

test();


function result()
{
    alert(num);
    
}

result();
 

*/


/*

//Function Scope
// can only access the variable inside of the function's curly braces {}

var num= 10 ; 

function test(){
    
    var num= 20;
    console.log(num);
}

test();

*/



/*

// Condtional Scope(If, Loops, Etc)
// allows us to access the variable outside of the {} unlike function scopes.
// In the example below the output for both alerts will be 5. We can access the value 5
//inside of the condtional scope and outside of the scope
// Can have an negative effect when coding.

var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

*/



/*

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

color1.addEventListener("input", showColor);
color2.addEventListener("input", showColor);

function showColor(){
    
 
    body.style.background= "linear-gradient(to right, " + color1.value + "  , " + color2.value+ ")";
    css.innerHTML=body.style.background + ";";
    
}

*/




/*var button=document.getElementById("enter");
var ulList=document.querySelector("ul");
var valueInput=document.getElementById("item");


button.addEventListener("click", clickItem);
valueInput.addEventListener('keypress', enterItem);
ulList.addEventListener("click", removeBtn)


function valueInputLength(){
    
    return valueInput.value.length;
    //returns the length of our string
    //we can now call the ValueInputLength function and return it 
    // to other functions for use
}

function createElement(){
      var listItem=document.createElement("li");
            listItem.appendChild(document.createTextNode(valueInput.value));
            listItem.className=("list-group-item");
            ulList.appendChild(listItem);
            valueInput.value= "";
    
    
    var btn=document.createElement("button");
    btn.className=("btn btn-danger btn-sm float-right delete");
    btn.appendChild(document.createTextNode("X"));
    listItem.appendChild(btn);
    
}

function clickItem(e){
    

        if(valueInputLength() > 0 )

        {


          createElement();

        } 


    

}

function enterItem(event){

    if(valueInputLength() > 0  && event.which == 13){
        
        
        createElement();
    }

    


    
}

function removeBtn(e){
    
   if(e.target.classList.contains("delete")){
       
         if(confirm("Are you sure?")){
             
             var targetParent=e.target.parentElement;
             
             ulList.removeChild(targetParent);
         }
       
        
       
   }
}

*/




/*var userAccess = [
    
    
    {
     
    
    username : "Brandon",
    password : "brandon1988"
    
    },
    
    {
     
    
    username : "Shelly",
    password : "shelly1988"
    
    },
    
     {
     
    
    username : "Mark",
    password : "mark1988"
    
    }
    

];

var memberList= [
    
    
    
    
    
    {
        user: "Timika",
        timeline: "I Want to watch Luke Cage"
        
        
    },
    
       {
        user: "Brandon",
        timeline: "Mariah is crazy!"
        
        
    },
    
    
    {
        user: "Eboni",
        timeline: "Shades is so sneaky"
        
        
    },
    
    
    
];

var userInput= prompt("Enter Username : ");
var passwordInput = prompt("Enter Password: ");

function validInfo(username, password){
       

    
for (var i = 0; i < userAccess.length; i++){    
    
        if(username == userAccess[i].username  &&  password == userAccess[i].password){

        console.log(memberList);
        return true;

        }


 }

                
              alert("Access denied");  
              return false;


            
        
    
    
    }


validInfo(userInput, passwordInput); 


*/




/*userAcess.forEach(function(access){
    
var userInput= prompt("Enter Username : ");
var passwordInput = prompt("Enter Password: ");


    
   if(userInput == access.username && passwordInput == access.password)
   
   {
       
       
       console.log(memberList);
   } 
    
    else{
        
        alert("access denied");
    }
    
});

*/


/*var userInput= prompt("Enter Username : ");
var passwordInput = prompt("Enter Password: ");

function personalnfo(userName, userPass){

    

for(i=0;  i < userAcess.length; i++){
    
    
   


    

    if(userName == userAcess[0].username && userPass == userAcess[0].password)
    
    {
        
        
        console.log(memberList);
    }
    
    
    else{
        
        alert("Acess Denied");
    }
    
    
    };
    
    
}

personalnfo(userInput, passwordInput);

*/



/*memberList.forEach(function(members,i){
    
    console.log(members,i);
    
});







*/


/*
var userInput= prompt("Enter Username : ");
var passwordInput = prompt("Enter Password: ");

function personalnfo(userName, userPass){

    if(userName == userAcess[0].username && userPass == userAcess[0].password)
    
    {
        
        
        console.log(memberList);
    }
    
    
    else{
        
        alert("Acess Denied");
    }
    
    
}

personalnfo(userInput, passwordInput);


/*

//Alternative way to write forEach Loop
//works the same as previous example.

var todo=["clean", "wash", "run", "cook"];


function todoList(todos, i){
    
    console.log(todos, i);
    
    
    
    
}

todo.forEach(todoList);

*/






/*

//Acessing the strings of an array inside of a Foreach Loop


var todo=["clean", "wash", "run", "cook"];


todo.forEach(function(todos){
    
 console.log(todos);   
    
});

/*

/*

Acessing String["string"] and Index[0,1,2 etc]

var todo=["clean", "wash", "run", "cook"]

// You can pass arrays through the ForEach loop. 
//create a anonymous function inside of the foreach method
//2 arguments go inside of the parameters(can be named anything) of the anonymous function.



todo.forEach(function(todos, i){
    
    
    console.log(todos, i);
    
});

/*


/*
// Do While will at excute code inside of the brackets at least once and then check the condition. 
var counter= 0;

do{
    
    document.write(counter);
    counter++;
}
while(counter < 10){
    
    
}
*/




/*

Unlike Do While, While Loop excutes the conditon first and if inncorrent it will not run the code. 


var counter= 10;

while(counter > 0){
    
    
    console.log(counter);
    counter--;
}


*/


/*var counter= 0;

while(counter < 10){
    
    
    console.log(counter);
    counter++;
}
*/


/*
//when you run the loop. you're displaiyng the INDIVIDUAL STRINGS inside of the array. Not the Array itself. 


var todo=["clean", "wash", "run", "cook"];

var clearList= todo.length;

for(i=0; i < clearList; i++){
    
   todo.pop();
}

*/

/*var todo=["clean", "wash", "run", "cook"];

for(var i=0; i < todo.length; i++){
    
    todo[i] = todo[i] + " * ";
    
    document.write(todo[i]);
}
*/



/*var todo=["clean", "wash", "run", "cook"];

for(var i=0; i < todo.length; i++){
    
    document.write(todo[i] + "<br>");
}*/





/*var loginSystem= {
    
    
    username: "Brandon",
    password : "geordae88"
}

*/

//FaceBook 

/*var database = [
    
    
    {
        
        
        username: "Brandon",
        password : "geordae88"
    }
    
    
];



var newsfeed = [
    
    
    {
        
        
        username: "bran88",
        timeline: "I will be an awesome full stack developer"
    },
    
    
     {
        
        
        username: "timiki",
        timeline: "I will be an awesome entrepreneur"
    },
    
    
         {
        
        
        username: "elisha",
        timeline: "I will be an awesome hair stylist"
    },
    
    
];


var userPrompt = prompt("Enter Username : ");

var passPrompt = prompt("Enter Password : ");


function acessCode (user, pass){
    
   if(user == database[0].username && pass== database[0].password){
       
       
      console.log(newsfeed);
   } 
    else{
        
        
        document.write("Please try again");
    }
    
    
    
    
}

acessCode(userPrompt,passPrompt);

*/



/*


var array2 = ["Banana", 
              
              
              
              
              
            ["Apples", ["Oranges"], "Blueberries"]
             
             
             ];

console.log(array2[1][1][0]);



//Array within an array

var list= [
    
    
    ["orange", "soap", "cracker"],
           
    ["pop", "cookies", "pudding"],       
           
    ];


document.write(list[0][1]);


//Concatinating an array and using the sort  method

var list= ["orange", "soap", "cracker"];

var newList= list.concat("pop", "cookies ");

newList.sort();

document.write(newList);

//Concatinating an array and using the shift method

var list= ["orange", "soap", "cracker"];

var newList= list.concat("pop", "cookies ");

newList.shift();

document.write(newList);

//Concatinating an array and usisng the pop method


var list= ["orange", "soap", "cracker"];

var newList= list.concat("pop", "cookies ");

newList.pop();

document.write(newList);

*/


/*function checkDriverAge(age){
    
    
    if(age < 18){

        return "Sorry you are too young to drive" ;


    }

    else if(age == 18){


        return "You are ready to hit the road" ;
    }

    else if(age > 18){

        return "You are more than experinced to drive. Good Luck!";

    }
    
}



document.write(checkDriverAge(15));

*/




/*

// Calling a function with Value Declaration

function checkDriverAge(age){
    
    
    if(age < 18){

        alert("Sorry you are too young to drive");


    }

    else if(age == 18){


        alert("You are ready to hit the road");
    }

    else if(age > 18){

        alert("You are more than experinced to drive. Good Luck!");

    }
    
}

var ageNum=prompt("What is your age");

checkDriverAge(ageNum);
*/

/*
// calling a function with Function Expression



var checkDriverAge2= function(age){
    
    
    if(age < 18){

        alert("Sorry you are too young to drive");


    }

    else if(age == 18){


        alert("You are ready to hit the road");
    }

    else if(age > 18){

        alert("You are more than experinced to drive. Good Luck!");

    }
    
}

var ageNum=prompt("What is your age");

checkDriverAge2(ageNum);

/*

/*

//calling a function 


function number (num){

console.log(num);
}

number(12);


/*Return Sttament/*
-------------------
return statement excutes only once throughout the code.

///returning a function example 1
function num(a,b){
  
 return a * b;
    

    
    
}

console.log(num(5,13));


//returning a function example 2


function number (num1, num2){
    
var total= num1 * num2;
   return total;
   
}

document.write(number(12,8));


//Function Decleration

function sayHello(){
    
    
    console.log("Hello");
   

}

 sayHello();


// Function Expression

var sayBye= function(){
    
    console.log("bye");
}

sayBye();

*/




/*var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var name= firstName + " " + lastName;
alert(" Your Name is : " + name);


var a = 34;
var b = 21;
 a= 2;
a+b;


var first= prompt("Enter First Number");
var second = prompt("Enter Second Number);
var sum = Number(first) + Number(second);
alert("The Sum is : " + sum);'




//for javascript file

var age= prompt("Enter Your age");

if(age < 18){
    
    alert("Sorry you are too young to drive");
    
    
}

else if(age == 18){
    
    
    alert("You are ready to hit the road");
}

else if(age > 18){
    
    alert("You are more than experinced to drive. Good Luck!");

}

//for console in google 

var age= prompt("Enter Your Age : ");


if ( Number(age) < 18){

alert("Sorry too young");
}



else if( Number(age) > 18){

alert("Powering On  Enjoy the ride");


}


else if(Number(age) === 18){

alert("Congratulations on your first year of driving. Enjoy the ride!");
}


*/


