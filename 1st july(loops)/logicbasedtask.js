var prompt=require('prompt-sync')();
// 🧮  Logic-Based Tasks
// 1)Check if a given number is a prime number using a loop.

// 2)Print the factorial of a number (e.g., 6! = 720).

// 3)Print the reverse of a number using a loop (e.g., 123 → 321).

// 4)Count the number of digits in a given number using a loop.

// 5)Check if a number is a palindrome (e.g., 121, 1331) using only number operations and loops.

console.log("Question 1:Prime or not");
let u=parseInt(prompt("Enter the number: "));
let Prime=true;
if(u<=1){
    Prime=false;
}
else{
    for(let i=2;i<=(u/2);i++){
        if(u%i===0){
            Prime=false;
            break;
        }
    }
}
if(Prime){
    console.log("The number is prime");
}
else console.log("The number is not prime");



console.log("Question 2:Factorial");
let p=parseInt(prompt("Enter the number: "));
let fact=1;
for(let i=1;i<=p;i++){
    fact*=i;
}
console.log("Factorial:",fact);

console.log("Question 3:Reverse of a number");;
let x=parseInt(prompt("Enter the number: "));
let reve=0;
while(x>0){
    let ld=x%10;
    reve=reve*10+ld;
    x=parseInt(x/10);
}
console.log("The number after reverse:",reve);

console.log("Question 4: Count number of digits");
let y=parseInt(prompt("Enter the number: "));
let count=0;
while(y>0){
    let ld=y%10;
    count++;
    y=parseInt(y/10);
}
console.log("The number of digits:",count);



console.log("Question 5:Palindrome");
let n=parseInt(prompt("Enter the number: "));
let t=n;
let rev=0;
while(n>0){
    let ld=n%10;
    rev=rev*10+ld;
    n=parseInt(n/10);
}
if(t===rev){
    console.log("It is a Palindrome Number");
}
else{
    console.log("It is not a palindrome number ");
}

