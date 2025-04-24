/*Arithmatic oprators
let a = 10;
let b = 20;

console.log("Addition: " + (a + b)); // Addition
console.log("Subtraction: " + (a - b)); // Subtraction  
console.log("Multiplication: " + (a * b)); // Multiplication
console.log("Division: " + (a / b)); // Division
console.log("Modulus: " + (a % b)); // Modulus
console.log("Exponentiation: " + (a ** b)); // Exponentiation*/

/*unary operators
let a = 10;
let b = 20;
console.log("a:"+(a++))
console.log(a)*/

/*assignment operators

let a = 10;
let b = 20;     

a+=1;
console.log(a) // 11

a-=1;
console.log(a) // 10

a*=2;
console.log(a) // 20        

a/=2;
console.log(a) // 10

a%=2;       
console.log(a) // 0 */

//comparison operators

/*let a = 10;
let b = 20;
console.log(a<b) // true
console.log(a>b) // false   
console.log(a==b) // false
console.log(a!=b) // true
console.log(a===b) // false
console.log(a!==b) // true
console.log(a<=b) // true
console.log(a>=b) // false*/


/*logical operators
let a = 10;
let b = 20;

console.log(a<b && a>b) // false
console.log(a<b || a>b) // true
console.log(!(a<b)) // false
console.log(!(a>b)) // true
console.log(a<b && a>b || a==b) // true
console.log(a<b || a>b && a==b) // true
console.log(a<b && a>b || a!=b) // true
console.log(a<b || a>b && a!=b) // true
console.log(a<b && a>b || a===b) // false
console.log(a<b || a>b && a===b) // true
console.log(a<b && a>b || a!==b) // true
console.log(a<b || a>b && a!==b) // true
console.log(a<b && a>b || a<=b) // true*/




/*bitwise operators
let a = 10; // 1010
let b = 20; // 10100

console.log(a & b) // 0
console.log(a | b) // 30
console.log(a ^ b) // 30
console.log(~a) // -11
console.log(a << 2) // 40  */


/*Conditional statements
let age=16;
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}   */

    /*Odd-Even
    let num=20;
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")      
    }*/

/*else-if statement

let marks=80;
if(marks>=90){
    console.log("Grade A")
}
else if(marks>=80 && marks<90){
    console.log("Grade B")
}
else if(marks>=70 && marks<80){
    console.log("Grade C")
}
else if(marks>=60 && marks<70){
    console.log("Grade D")
}
else if(marks>=50 && marks<60){
    console.log("Grade E")
}
else{
    console.log("Grade F")
}*/

/*prompt statement
let num=prompt("Enter a number")
if(num%2==0){
    console.log("Even")
}   
else{
    console.log("Odd")      
}*/

/*for (let i = 0; i <=5; i++) {
    console.log("Hello World");

}

for(let count=0; count<=5; count++){
    console.log("Hello World" + count);
}*/

/*for(let i=0; i<=100; i++)
{
if(i%2==0)
{
    console.log(i + " is even")
}
}*/

/*let gameNum=25;
let userNum=prompt("Enter a number between 1 to 100")
if(userNum==gameNum){
    console.log("You guessed the number")
}*/

/*function myFunction(msg) {
    console.log("Hello World");
    let num = prompt("Enter name");
    console.log("We are learning JS");
}

myFunction("Hello World");
myFunction(); */

/*function add(a,b){  
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}

let value1=add(10,20);
console.log(value1) // 30*/

/* arrow sum function
function add(a,b){  
    return a+b;
}
 const arrowAdd=(a,b) =>{
   console.log("Sum is: " + add(a,b));
   console.log("Subtraction is: " + sub(a,b));
 }

 function mul(a,b){
    return a*b;
}
const arrowMul = (a,b) => {
    console.log("Multiplication is: " + mul(a,b));
    console.log("Division is: " + div(a,b));
}*/

//Pcarctice 1

/*function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}*/

// First class citizen function
