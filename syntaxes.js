let name="pravalli";
let age=18;     //Variable declaration
console.log(name,age); //prints pravalli,18

//OPERATORS:
console.log(5+"5");//returns value"55"
console.log("5"-2);//returns value 3

let username = prompt("what is your name?"); //Asks user for a input

let person = {
    name: "pravalli",
    age: 18,
    city: "vizag"
};
    
// Get keys of the object
let keys = Object.keys(person);
console.log(keys);  // Prints: ['name', 'age', 'city']

// Get values of the object
let values = Object.values(person);
console.log(values);  // Prints: ['pravalli', 18, 'vizag']

//FUNCTIONS:

//Named function;
function add(x,y)
{
    return x + y;   //returns sum of x and y
                     
}

//output: 
console.log(add(14,16));
//30

//anonymous function;
const difference=function(x,y)
{
    return x - y;   //Data stored using variables
}

//output 
console.log(difference(10,4));
//6

//Arrow function;
const divide=(x,y)=>x/y;
console.log(divide(15,3));
// Output: 5

//LOOPS:

//Using while:

let count = 1;
while (count <= 5) {
  console.log(count);  // Prints numbers from 1 to 5
  count++;
}

//Using for loop:

let sum=0;
for (let i = 1; i <= 3; i++) {
  sum += i;  // Adds numbers 1, 2, and 3 to 'sum'
}
console.log(sum);  // Prints the sum, which is 6    

//ARRAY METHODS:

let roll = ['250', '247', '229'];
roll.push('228');  // Adds '228' to the end of the array
let lastroll = roll.pop();  // Removes and returns the last element ('228')

let animals = ['dog', 'cat', 'rabbit'];
animals.unshift('elephant');  // Adds 'elephant' to the beginning of the array
let firstAnimal = animals.shift();  // Removes and returns the first element ('elephant')

let numbers = [10, 20, 30, 40, 50];
let slicedNumbers = numbers.slice(1, 4);  // Creates a new array [20, 30, 40]
console.log(slicedNumbers);
numbers.splice(2, 2, 60, 70); // Removes 30 and 40, and adds 60 and 70 at index 2
console.log(numbers);