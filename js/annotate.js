//javascript consoles
console.log("Hello World");
//or
var hello = "Hello World"
console.log(hello)

//objects
var car = {
  make:"Tesla",
  model:"Model 3",
  year: 2020,
  color: "Red",
  start: function(){
    console.log("Car Started!");
  }
};

//variable
var x = 5;
var y = 6;
var z = x + y;

//string
var name = "Suzy";
var selection = "Q";
console.log(name);
console.log(selection);
console.log(name + selection);

//number
var count = 10
var cost = 2.50;

count + cost

//boolean
var found = true;
var lost = false;
//or
9>=10 //returns false
11>10 //returns true

//null
var object = null;
//use when you need to create an object as a placeholder but do not have anything to put there yet

//undefined
var flag = undefined;
//creates a variable in the data object model without a definition that can be populated later

//arrays
var array = [];
var array1 = [1, 2, 5];
//accessing elements of an array like Python or R...
array1;
[1, 2, 5]
array1[0];
[1];
array[1];
3

//object literal
var course = {
  name: "GHY 3814: Interactive Cartography and Web Mapping",
  year: 2020,
  univ: "AppState"
};

console.log(course.name);
console.log(course.name + course.year)

//function
var myFunction = functionName(argument) {
  //function goes here
};

//Function declaration with parameters
function multiply_this(a,b) {
  return a*b;
}
//call the function, providing arguments for the parameters
var x = 3;
var y = 5;

multiply_this(x,y); //run this function with x and y as the arguments
15 //the returned value

//function expression
var multiply_that = function(a,b){
  return a*b;
}
//call the function, providing arguments for the parameters
var x = 3;
var y = 5;

multiply_that(x,y) //run that function
15 //returned value

//functions as objects
var newCar = {
    make:"Tesla",
    model:"Model 3",
    year: 2020,
    color: "Red",
    start: function(){
      console.log("Car Started!");
    }
  }
//view the data values
console.log(newCar);
console.log(newCar.make);
//or start the Car
newCar.start();

//function Hoisting
//declare before use
notice = "web mapping";
console.log(notice)
var notice;
//declare after course
var notice;
notice = "web mapping";
console.log(notice)

//Variable scope
//global Variable
var carName = "Tesla";
//code here can use carName
function functionName() {
  //code
}
//local Variable
function functionName() {
  var carName = "Tesla";
}

//Methods
var car = {
  make:"Tesla",
  model:"Model 3",
  year:2020,
  color:"Red",
  start: function(){
    console.log("Car started!");
  }
};
car.start()

//Properties and values
var car = {
  make:"Tesla",
  model:"Model 3",
  year:2020,
  color:"Red"
};

car.color;
"Red"
car.color= "Silver";

car.color;
"Silver"

//conditionals
var number=100;

if (number==100){
  console.log("True")
}else{
  console.log("False")
};
true
if (number==99){
  console.log("True")
  }else{
  console.log("False")
};
false

var number=100;
if (number==100){
  console.log("Number is 100");
}else if (number<100){
  console.log("Number is less than 100");
}else if{
  console.log("Number is greater than 100");
};

//for loop
for(var i=0; i<1000, i++){
  //code here will run 1000 times then move on to the next
}
for (var i in data){
  //run this on each value
}
var counter=0
while(counter <1000){
  //code here will return
  counter += 1 //adds 1 to counter each time, will stop at 1000
}

//JSON Javascript Object Notion
var directory={"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName": "Anna", "lastName": "Smith"},
  {"firstName": "Peter", "lastName": "Jones"}
]}

console.log(directory.employees)
console.log(directory.employees[1]);
console.log(directory.employees[1].firstName);

var dataset = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [41.2, 174.7]
  },
  "properties": {
    "name": "Wellington, New Zealand"
  }
}

console.log(dataset);
console.log(dataset.type);
console.log(dataset.geometry.coordinates);
console.log(dataset.properties);

var directory = {"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName": "Anna", "lastName": "Smith"},
  {"firstName": "Peter", "lastName": "Jones"}
]}

var data= directory.employees;
console.log(data);

for (var i in data){
  fName=data[i].firstName;
  lName=data[i].lastName;
\\do something with each value of the array
  console.log(fName);
  console.log(lName);
}

//accessing elements of your page
document;
document.getElementById("foo")
document.getElementByClassName("class-name");

//event listeners
document.getElementById("foo").addEventListener("click", displayDate)

//displayDate function
function displayDate() {
  document.getElementById("foo").innerHTML=Date();
}

//working with libraries
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
